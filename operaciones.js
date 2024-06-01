//operaciones.js
const fs = require('fs');

// Función para escribir en el archivo
const escribir = (nombreArchivo, contenido) => {
    let citas = [];
    
    // Verificar si existe el archivo
    if (fs.existsSync(nombreArchivo)) {
        const datos = fs.readFileSync(nombreArchivo, 'utf8');
        if (datos) {
            citas = JSON.parse(datos);
        }
    }

    // Nuevo registro
    const registro = {
        "nombre": contenido[0],
        "edad": contenido[1],
        "animal": contenido[2],
        "color": contenido[3],
        "enfermedad": contenido[4]
    };
    
    // Agregar el nuevo registro a la lista de citas
    citas.push(registro);
    
    // Escribir la lista actualizada de citas al archivo
    fs.writeFileSync(nombreArchivo, JSON.stringify(citas, null, 2));
};

// Función para leer el archivo
const leer = (nombreArchivo) => {
    if (fs.existsSync(nombreArchivo)) {
        const leerArchivo = fs.readFileSync(nombreArchivo, 'utf8');
        return JSON.parse(leerArchivo);
    } else {
        return [];
    }
};

module.exports = { escribir, leer };
