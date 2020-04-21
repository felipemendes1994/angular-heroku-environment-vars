const fs = require('fs');

const heroku = `export const environment = {
    production: true,
    ambiente: '${process.env.AMBIENTE}'
}`

fs.writeFile('src/environments/environment.prod.ts', heroku, (err, result) => {
    if(err){
        console.log('Falha ao escrever arquivo com variavel de ambiente');
    }
});