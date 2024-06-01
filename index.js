//index.js
const { escribir, leer } = require('./operaciones.js')
const [ opcion, ...contenido ] = process.argv.slice(2);

const nombreArchivo = 'citas.json';
//console.log(contenido);

if (opcion.toLowerCase() === 'escribir') {
    if (contenido.length < 5) {
        console.log('Error: Debe ingresar Nombre, Edad, Tipo, Color y Enfermedad del animal para registrar una cita.');
        process.exit(1);
    }
    escribir(nombreArchivo, contenido);
    console.log('Cita agregada con éxito.');
} else if (opcion.toLowerCase() === 'leer') {
      const citas = leer(nombreArchivo);
      console.log('Contenido de citas:', JSON.stringify(citas, null, 2));
} else {
      console.log('Error: Opción no válida. Debe ingresar "escribir" o "leer".');
      process.exit(1);
}