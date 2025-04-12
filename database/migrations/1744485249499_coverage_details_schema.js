'use strict'

const Schema = use('Schema')

class CoverageDetailsTableSchema extends Schema {
  up() {
    this.create('coverage_details', (table) => {
      table.increments()
      table.integer('insurance_plan_id').unsigned().references('id').inTable('insurance_plans')
      table.boolean('prescription_coverage').defaultTo(true)
      table.boolean('dental_coverage').defaultTo(false)
      table.boolean('vision_coverage').defaultTo(false)
      table.boolean('mental_health_coverage').defaultTo(true)
      table.boolean('preventative_care_coverage').defaultTo(true)
      table.boolean('specialist_coverage').defaultTo(true)
      table.boolean('emergency_coverage').defaultTo(true)
      table.boolean('hospitalization_coverage').defaultTo(true)
      table.json('additional_coverage')
      table.timestamps()
    })
  }

  down() {
    this.drop('coverage_details')
  }
}

module.exports = CoverageDetailsTableSchema
