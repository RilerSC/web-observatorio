import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Configurar el transportador de correo
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: `"Observatorio de Sostenibilidad" <${process.env.SMTP_EMAIL}>`,
      to: process.env.SMTP_EMAIL, // Enviar a la misma cuenta o a otra dirección
      replyTo: correo,
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a1623; border-bottom: 3px solid #00bed6; padding-bottom: 10px;">
            Nuevo Mensaje de Contacto
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #0a1623;">Nombre:</strong> ${nombre}</p>
            <p style="margin: 10px 0;"><strong style="color: #0a1623;">Correo:</strong> <a href="mailto:${correo}" style="color: #00bed6;">${correo}</a></p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #6abf4b; margin: 20px 0;">
            <h3 style="color: #0a1623; margin-top: 0;">Mensaje:</h3>
            <p style="color: #2d2d2d; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #999; font-size: 12px;">
            <p>Este mensaje fue enviado desde el formulario de contacto del Observatorio de Sostenibilidad.</p>
          </div>
        </div>
      `,
      text: `
Nuevo Mensaje de Contacto

Nombre: ${nombre}
Correo: ${correo}

Mensaje:
${mensaje}

---
Este mensaje fue enviado desde el formulario de contacto del Observatorio de Sostenibilidad.
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Correo enviado exitosamente' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error al enviar correo:', error);
    return NextResponse.json(
      { error: 'Error al enviar el correo. Por favor, intenta nuevamente.' },
      { status: 500 }
    );
  }
}

