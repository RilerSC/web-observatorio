const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, '../public/img');
const files = fs.readdirSync(imgDir).filter(f => f.match(/\.(jpg|jpeg)$/i));

console.log('🖼️  Optimizando imágenes a WebP...\n');

const convertImage = async (file) => {
  const input = path.join(imgDir, file);
  const output = path.join(imgDir, file.replace(/\.(jpg|jpeg)$/i, '.webp'));
  
  try {
    const stats = fs.statSync(input);
    const sizeBefore = (stats.size / (1024 * 1024)).toFixed(2);
    
    await sharp(input)
      .webp({ quality: 85 })
      .toFile(output);
    
    const statsAfter = fs.statSync(output);
    const sizeAfter = (statsAfter.size / (1024 * 1024)).toFixed(2);
    const reduction = ((1 - statsAfter.size / stats.size) * 100).toFixed(1);
    
    console.log(`✅ ${file}`);
    console.log(`   ${sizeBefore}MB → ${sizeAfter}MB (-${reduction}%)`);
    console.log(`   Guardado como: ${file.replace(/\.(jpg|jpeg)$/i, '.webp')}\n`);
    
    return {
      file,
      sizeBefore: stats.size,
      sizeAfter: statsAfter.size,
      reduction: parseFloat(reduction)
    };
  } catch (error) {
    console.error(`❌ Error procesando ${file}:`, error.message);
    return null;
  }
};

const main = async () => {
  if (files.length === 0) {
    console.log('⚠️  No se encontraron archivos JPG/JPEG en public/img/');
    return;
  }
  
  console.log(`📁 Encontrados ${files.length} archivos para convertir:\n`);
  files.forEach(f => console.log(`   - ${f}`));
  console.log('');
  
  const results = [];
  
  for (const file of files) {
    const result = await convertImage(file);
    if (result) results.push(result);
  }
  
  // Resumen
  if (results.length > 0) {
    const totalBefore = results.reduce((sum, r) => sum + r.sizeBefore, 0);
    const totalAfter = results.reduce((sum, r) => sum + r.sizeAfter, 0);
    const totalReduction = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
    
    console.log('═══════════════════════════════════════════════');
    console.log('📊 RESUMEN DE OPTIMIZACIÓN');
    console.log('═══════════════════════════════════════════════');
    console.log(`Archivos procesados: ${results.length}`);
    console.log(`Tamaño original:     ${(totalBefore / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`Tamaño optimizado:   ${(totalAfter / (1024 * 1024)).toFixed(2)}MB`);
    console.log(`Reducción total:     ${totalReduction}%`);
    console.log(`Espacio ahorrado:    ${((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2)}MB`);
    console.log('═══════════════════════════════════════════════\n');
    
    console.log('✨ Optimización completada exitosamente!\n');
    console.log('📝 Próximos pasos:');
    console.log('   1. Actualiza las referencias en el código de .jpg a .webp');
    console.log('   2. Prueba que las imágenes se vean correctamente');
    console.log('   3. Opcional: Elimina los archivos .jpg originales\n');
  }
};

main().catch(console.error);

