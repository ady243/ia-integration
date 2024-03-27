/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('allergy', function(table) {
      table.increments('id');
      table.string('allergen'); 
      table.integer('user_id').unsigned().notNullable();
  
      table.foreign('user_id').references('id').inTable('users');
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
export const down = function(knex) {
    return knex.schema.dropTable('allergy');
  };