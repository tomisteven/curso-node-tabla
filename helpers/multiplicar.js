const crearArchivo = (base, listar, max) => {
    return promesa = new Promise((res, reject) => {
        const fs = require("fs")
        const colors = require('colors')
        let salida, consola= ''
        
        
        for (let i = 1; i <= max; i++) {
            
            salida += (`${base} x ${i} = ${base*i}\n`)
            consola+=(`${colors.green(base)} ${colors.yellow("x")} ${colors.green(i)} ${"=".blue} ${base*i}\n`)
        }
        
        if(listar){
            console.log("===============================".rainbow)
            console.log(`Tabla del:`, base)
            console.log("===============================".rainbow)
            
            console.log(consola)

        }

        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        
        res(`tabla-${base}.txt`)

        reject("Error al crear la tabla")







    })


}

module.exports = {
    crearArchivo
}