const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');
/*
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


Usuario.findAll({
  where: {
    nome: { [Op.like]: '%a%'}
  }
}).then((resultado) => {
  console.table(resultado.map((user) => user.toJSON()));
});

Usuario.findAll({
  where: {
    nome: { [Op.notLike]: '%a%'}
  }
}).then((resultado) => {
  console.table(resultado.map((user) => user.toJSON()));
});

for (let i = 0; i < 6; i += 2) {
  Comentario.findAll({
    order: [['id', 'DESC']],
    offset: i,
    limit: 2,
  }).then((resultado) => {
    console.table(resultado.map((comment) => comment.toJSON()));
  });
}

Usuario.create({
  nome: 'Marina Oliveira',
  email: 'marioliveira@gmail.com',
  senha: 'marigatinha12321'
}).then((resultado) => {
  console.table(resultado.toJSON());
});

Usuario.update({
  email: 'sergio@digitalhouse.com'
}, {
  where: {
  id: 2
  }
}).then((resultado) => {
  console.log(resultado);
});

Usuario.destroy({
  where: {
    id: 3
  }
}).then((resultado) => {
  console.log(resultado.toJSON());
});

Post.create({
  texto: 'Bom dia!!',
  img: 'none',
  usuarios_id: 12,
  n_likes: 100,
});

Usuario.findAll()
.then((resultado) => {
  console.table(resultado.map(user => user.toJSON()));
});
*/

// Usuario.findByPk(1, {
//   include: [ {association: 'posts'} ]
// }).then((usuario) => {
//   console.table(usuario.posts.map((post) => post.toJSON()));
// });

// Post.findByPk(1, {
//   include: [ {association: 'comentarios'} ]
// }).then((post) => {
//   console.table(post.comentarios.map((comentario) => comentario.toJSON()));
// });
