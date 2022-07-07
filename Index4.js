const fs = require('fs');

fs.writeFile('/.text 1', 'Linea 1', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log('ultima linea de codigo');
