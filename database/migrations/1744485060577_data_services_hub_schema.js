'use strict'

const Schema = use('Schema')

class DataServicesHubsTableSchema extends Schema {
  up() {
    this.create('data_services_hubs', (table) => {
      table.increments()
      table.string('hub_id').notNullable().unique()
      table.string('name').notNullable()
      table.text('description')
      table.json('data_types')
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('data_services_hubs')
  }
}

module.exports = DataServicesHubsTableSchema
