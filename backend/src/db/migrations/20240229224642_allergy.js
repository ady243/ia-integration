/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async function(knex) {
  const hasTable = await knex.schema.hasTable('allergy');
  if (!hasTable) {
    return knex.schema.createTable('allergy', function(table) {
      table.increments('id');
      table.string('allergen').nullable(); 
      table.integer('user_id').unsigned().nullable();
  
      table.foreign('user_id').references('id').inTable('users');
    });
  }
};
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
  return knex.schema.dropTable('allergy');
};