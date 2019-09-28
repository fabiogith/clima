const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    }).argv


// lugar.getLugarLatLng(argv.direccion).then(resp => {
//     console.log(resp)
// })

//clima.getClima(35, 139).then(console.log);

const getInfo = async(direccion) => {


    try {
        const coor = await lugar.getLugarLatLng(direccion)
        const temp = await clima.getClima(coor.lat, coor.lng);
        return `El clima de ${coor.direccion} es de ${temp} grados`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`


    }
}

getInfo(argv.direccion).then(resp => {
        console.log(resp)
    })
    .catch(err => {
        console.log(err);
    })