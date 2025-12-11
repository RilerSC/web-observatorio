import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configuración para Vercel serverless
export const runtime = 'nodejs';
export const maxDuration = 30; // 30 segundos máximo

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, correo, mensaje } = body;

    // Validación básica
    if (!nombre || !correo || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validar formato de correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      return NextResponse.json(
        { error: 'El formato del correo no es válido' },
        { status: 400 }
      );
    }

    // Verificar que las variables de entorno estén configuradas
    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
      console.error('Variables de entorno SMTP no configuradas');
      return NextResponse.json(
        { error: 'Error de configuración del servidor. Por favor, contacta al administrador.' },
        { status: 500 }
      );
    }

    // Configurar el transportador de correo optimizado para Vercel/serverless
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
      // Configuración optimizada para serverless (sin pool para evitar timeouts)
      connectionTimeout: 10000, // 10 segundos
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Sanitizar el nombre para evitar inyección
    const sanitizedName = nombre.replace(/[<>]/g, '');
    const sanitizedEmail = correo.replace(/[<>]/g, '');
    const sanitizedMessage = mensaje.replace(/[<>]/g, '');

    // Configurar el correo con headers mejorados para evitar spam
    const mailOptions = {
      from: `"Observatorio de Sostenibilidad" <${process.env.SMTP_EMAIL}>`,
      to: process.env.CONTACT_EMAIL || 'lgomez@fundepos.ac.cr', // Correo de destino
      replyTo: sanitizedEmail,
      subject: `Nuevo mensaje de contacto: ${sanitizedName}`,
      // Headers importantes para evitar spam y mejorar deliverabilidad
      headers: {
        'Message-ID': `<${Date.now()}-${Math.random().toString(36).substring(7)}@observatorio-sostenibilidad>`,
        'X-Mailer': 'Observatorio de Sostenibilidad Contact Form',
        'X-Entity-Ref-ID': `${Date.now()}-${Math.random().toString(36).substring(7)}`,
        'Precedence': 'bulk',
        'Auto-Submitted': 'no',
      },
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a1623; border-bottom: 3px solid #00bed6; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #0a1623;">Nombre:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong style="color: #0a1623;">Correo:</strong> <a href="mailto:${sanitizedEmail}" style="color: #00bed6; text-decoration: none;">${sanitizedEmail}</a></p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #6abf4b; margin: 20px 0;">
            <h3 style="color: #0a1623; margin-top: 0;">Mensaje:</h3>
            <p style="color: #2d2d2d; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto del Observatorio de Sostenibilidad.</p>
          </div>
        </div>
      `,
      text: `
Nuevo Mensaje de Contacto

Nombre: ${sanitizedName}
Correo: ${sanitizedEmail}

Mensaje:
${sanitizedMessage}

---
Este mensaje fue enviado desde el formulario de contacto del Observatorio de Sostenibilidad.
      `,
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    
    console.log('Correo enviado exitosamente:', {
      messageId: info.messageId,
      to: mailOptions.to,
      from: mailOptions.from,
    });

    return NextResponse.json(
      { message: 'Correo enviado exitosamente' },
      { status: 200 }
    );
  } catch (error: any) {
    // Log detallado del error para debugging en Vercel
    const errorDetails = {
      message: error?.message || 'Error desconocido',
      code: error?.code,
      command: error?.command,
      response: error?.response,
      responseCode: error?.responseCode,
      stack: error?.stack,
    };
    
    console.error('Error al enviar correo:', JSON.stringify(errorDetails, null, 2));
    
    // Mensaje de error más descriptivo
    let errorMessage = 'Error al enviar el correo. Por favor, intenta nuevamente.';
    if (error?.code === 'EAUTH') {
      errorMessage = 'Error de autenticación. Verifica las credenciales del servidor.';
    } else if (error?.code === 'ECONNECTION' || error?.code === 'ETIMEDOUT') {
      errorMessage = 'Error de conexión con el servidor de correo. Verifica la configuración.';
    } else if (error?.code === 'EENVELOPE') {
      errorMessage = 'Error en la configuración del correo.';
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        // En desarrollo, incluir más detalles
        ...(process.env.NODE_ENV === 'development' && { details: errorDetails })
      },
      { status: 500 }
    );
  }
}

