'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PersonalInfosTableSchema extends Schema {
  up() {
    this.create('personal_infos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.date('date_of_birth').notNullable()
      table.string('ssn').notNullable()
      table.string('gender')
      table.timestamps()
    })
  }

  down() {
    this.drop('personal_infos')
  }
}

module.exports = PersonalInfosTableSchema
