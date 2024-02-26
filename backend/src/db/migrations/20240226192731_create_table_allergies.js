/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable("allergies", (table) => {
      table.increments("id")
      table.integer("user_id").unsigned().notNullable().references("id").inTable("users")
      table.integer("recipe_id").unsigned().references("id").inTable("recipes")
      table.string("allergen").notNullable()
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema.dropTable("allergies")
  };
  