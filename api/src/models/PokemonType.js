const PokemonType = sequelize.define('PokemonType', {
    PokemonId: {
      type: DataTypes.INTEGER,
      references: {
        model: Pokemon, // 'Movies' would also work
        key: 'id'
      }
    },
    TypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Type, // 'Actors' would also work
        key: 'id'
      }
    }
  });