const fs = require('fs')

// fs.readFile('./assets/mario.png', (erro, buffer) => {
//   console.log('A imagem foi bufferizada')
//   console.log(buffer)

//   fs.writeFile('./assets/mariobros2.png', buffer, (erro) => {
//     console.log('A imagem foi escrita')
//   })
// });

fs.createReadStream('./assets/mario.png')
  .pipe(fs.createWriteStream('./assets/mario-bross.png'))
  .on('finish', () => console.log('Imagem foi escrita com sucesso'))