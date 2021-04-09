const { Usuario, Post, Comentario, sequelize } = require('./models');

Usuario.findAll()
.then((resultado) => {
  console.table(resultado.map(user => user.toJSON()));
});

Post.findAll()
.then((resultado) => {
  console.table(resultado.map(user => user.toJSON()));
});

Comentario.findAll()
.then((resultado) => {
  console.table(resultado.map(user => user.toJSON()));
});

Usuario.findOne({
  where: {
    senha: '1234125412'
  }
}).then((resultado) => {
  console.table(resultado.toJSON());
});

Usuario.findByPk(3).then((resultado) => {
  console.table(resultado.toJSON());
});