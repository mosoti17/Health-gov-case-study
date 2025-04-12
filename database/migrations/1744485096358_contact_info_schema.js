'use strict'

const Schema = use('Schema')

class ContactInfosTableSchema extends Schema {
  up() {
    this.create('contact_infos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('address_line1').notNullable()
      table.string('address_line2')
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('zip_code').notNullable()
      table.string('phone_number').notNullable()
      table.string('secondary_phone')
      table.string('email').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('contact_infos')
  }
}

module.exports = ContactInfosTableSchema
