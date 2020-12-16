const faker = require('faker')

module.exports = app => {
  app.get('/:cpf', (req, res) => {
    const { cpf } = req.params
  
    res.status(200).json({
      cpf,
      nome: faker.name.findName(),
      dataDeNascimento: faker.date.past()
    })
})
}