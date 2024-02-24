/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  await knex.schema.createTable("messages", (table) => {
    table.increments("id")
    table.integer("conversation_id").unsigned().notNullable()
    table.string("role", 255).notNullable()
    table.text("content").notNullable()
    table.timestamp("created_at").defaultTo(knex.fn.now())
    table.foreign("conversation_id").references("id").inTable("conversations")
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("messages")
}
