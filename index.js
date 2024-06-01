//index.js
const { escribir, leer } = require('./operaciones.js')
const [ opcion, ...contenido ] = process.argv.slice(2);
// const [  ] = process.argv.slice(3);
//console.log(process.argv.slice(2))
const nombreArchivo = 'citas.json';

//console.log(contenido);


if (opcion === 'escribir') {
    if (contenido.length < 5) {
        console.log('Error: Se requieren 5 elementos de contenido para escribir una cita.');
        process.exit(1);
    }
    escribir(nombreArchivo, contenido);
    console.log('Cita agregada con éxito.');
} else if (opcion === 'leer') {
      const citas = leer(nombreArchivo);
      console.log('Contenido de citas:', JSON.stringify(citas, null, 2));
} else {
      console.log('Error: Opción no válida. Debe ingresar "escribir" o "leer".');
      process.exit(1);
}