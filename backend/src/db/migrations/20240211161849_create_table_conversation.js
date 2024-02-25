/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("conversations", (table) => {
    table.increments("id")
    table.integer("user_id").unsigned().notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now())
    table.foreign("user_id").references("id").inTable("users")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("conversations")
}
