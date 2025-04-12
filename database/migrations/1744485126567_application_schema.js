'use strict'

const Schema = use('Schema')

class ApplicationsTableSchema extends Schema {
  up() {
    this.create('applications', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('insurance_plan_id').unsigned().references('id').inTable('insurance_plans').nullable()
      table.string('status').defaultTo('pending')
      table.date('submission_date').defaultTo(this.fn.now())
      table.date('decision_date')
      table.text('decision_notes')
      table.timestamps()
    })
  }

  down() {
    this.drop('applications')
  }
}

module.exports = ApplicationsTableSchema
