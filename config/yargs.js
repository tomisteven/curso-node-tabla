const argv = require('yargs')

    .options('b', {
        demandOption: true,
        alias: 'base',
        type: 'number',
        describe: "base de la tabla de multiplicar"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }
        return true
    })
    .options('l', {
        type: 'boolean',
        alias: 'listar',
        describe:"Listar la tabla",
        default: false,
        demandOption: true
    })
    .options('m',{
        alias:'max',
        type:"number",
        default: 10,
        demandOption:true,
        describe: "maximo a multiplicar"
    }).check((argv, options) => {
        if (isNaN(argv.max)) {
            throw "El maximo tiene que ser un numero"
        }
        return true
    })
    .argv


    module.exports = argv;
    