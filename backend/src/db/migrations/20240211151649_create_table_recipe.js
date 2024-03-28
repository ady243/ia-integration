/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("name", 255)
    table.string("description", 255)
    table.boolean("isFavorite"),
    table.string("method")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("recipes")
}
