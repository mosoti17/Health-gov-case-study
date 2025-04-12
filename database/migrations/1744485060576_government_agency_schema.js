'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GovernmentAgenciesTableSchema extends Schema {
  up() {
    this.create('government_agencies', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('jurisdiction')
      table.text('description')
      table.string('contact_email')
      table.string('contact_phone')
      table.timestamps()
    })
  }

  down() {
    this.drop('government_agencies')
  }
}

module.exports = GovernmentAgenciesTableSchema
