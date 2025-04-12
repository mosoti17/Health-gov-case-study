'use strict'

const Model = use('Model')

class FinancialInfo extends Model {
  application() {
    return this.belongsTo('App/Models/Application')
  }
}

module.exports = FinancialInfo
