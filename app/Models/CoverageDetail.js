'use strict'

const Model = use('Model')

class CoverageDetails extends Model {
  insurancePlan() {
    return this.belongsTo('App/Models/InsurancePlan')
  }
}

module.exports = CoverageDetails