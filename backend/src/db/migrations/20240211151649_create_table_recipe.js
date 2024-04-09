/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("name", 255)
    table.string("description", 255)
    table.string("ingredients", 255)
    table.integer("duration")
    table.boolean("isFavorite"),
    table.string("instructions", 4000)
    table.string("imageUrl", 255)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("recipes")
}
