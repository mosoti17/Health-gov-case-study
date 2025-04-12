'use strict'

const Schema = use('Schema')

class FinancialInfosTableSchema extends Schema {
  up() {
    this.create('financial_infos', (table) => {
      table.increments()
      table.integer('application_id').unsigned().references('id').inTable('applications')
      table.decimal('annual_income', 12, 2).notNullable()
      table.integer('household_size').notNullable()
      table.boolean('tax_filing_status').notNullable()
      table.boolean('requesting_subsidy').defaultTo(false)
      table.boolean('employer_coverage').defaultTo(false)
      table.boolean('medicaid_eligible')
      table.timestamps()
    })
  }

  down() {
    this.drop('financial_infos')
  }
}

module.exports = FinancialInfosTableSchema
