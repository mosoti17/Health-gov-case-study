'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FederalMarketplacesTableSchema extends Schema {
  up() {
    this.create('federal_marketplaces', (table) => {
      table.increments()
      table.integer('platform_id').notNullable().unique()
      table.boolean('open_enrollment').defaultTo(false)
      table.date('enrollment_start_date')
      table.date('enrollment_end_date')
      table.integer('government_agency_id').unsigned().references('id').inTable('government_agencies')
      table.integer('data_services_hub_id').unsigned().references('id').inTable('data_services_hubs')
      table.timestamps()
    })
  }

  down() {
    this.drop('federal_marketplaces')
  }
}

module.exports = FederalMarketplacesTableSchema
