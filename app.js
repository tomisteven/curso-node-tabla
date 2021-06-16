//const { argv } = require("yargs")
const {
    crearArchivo
} = require("./helpers/multiplicar")
const argv = require('./config/yargs.js')


//const base = 10


crearArchivo(argv.b, argv.l, argv.m)
    .then(nombreArchivo => console.log(nombreArchivo.red, "Creada"))
    .catch(err => console.log(err.red))







/* const [, ,arg3='base=5'] = process.argv
const [, base = 5] = arg3.split('=') */