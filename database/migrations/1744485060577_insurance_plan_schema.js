'use strict'

const Schema = use('Schema')

class InsurancePlansTableSchema extends Schema {
  up() {
    this.create('insurance_plans', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('provider').notNullable()
      table.string('plan_level').notNullable() // Bronze, Silver, Gold, Platinum
      table.decimal('base_premium', 10, 2).notNullable()
      table.decimal('deductible', 10, 2).notNullable()
      table.decimal('copay', 10, 2)
      table.decimal('max_out_of_pocket', 10, 2)
      table.integer('federal_marketplace_id').unsigned().references('id').inTable('federal_marketplaces')
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('insurance_plans')
  }
}

module.exports = InsurancePlansTableSchema
