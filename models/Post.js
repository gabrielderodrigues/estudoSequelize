module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post', {
      texto: DataTypes.STRING,
      usuarios_id: DataTypes.INTEGER,
      n_likes: DataTypes.INTEGER,
      img: DataTypes.STRING
    }, {
      tableName: "posts",
      timestamps: false
    }
  );

  return Post;
}