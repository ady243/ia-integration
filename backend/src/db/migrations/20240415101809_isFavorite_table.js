// 20240415101809_isFavorite_table.js
export const up = function(knex) {
    return knex.schema.createTable("favorites", function(table) {
      table.increments("id")
      table.integer("user_id").unsigned().notNullable()
      table.integer("recipe_id").unsigned().notNullable()
  
      table.foreign("user_id").references("id").inTable("users")
      table.foreign("recipe_id").references("id").inTable("recipes")
    })
  };
  
  export const down = function(knex) {
    return knex.schema.dropTable("favorites");
  };