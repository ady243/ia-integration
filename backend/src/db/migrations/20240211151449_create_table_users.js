/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  const hasTable = await knex.schema.hasTable('users');
  if (!hasTable) {
    await knex.schema.createTable("users", (table) => {
      table.increments("id")
      table.string("fullName").notNullable()
      table.string("email").notNullable().unique()
      table.text("passwordHash").notNullable()
      table.text("passwordSalt").notNullable()
      table.datetime("createdAt").notNullable()
      table.datetime("updatedAt").notNullable()
    })
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  await knex.schema.dropTable("users")
}