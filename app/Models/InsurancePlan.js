'use strict'

const Model = use('Model')

class InsurancePlan extends Model {
  applications() {
    return this.hasMany('App/Models/Application')
  }

  federalMarketplace() {
    return this.belongsTo('App/Models/FederalMarketplace')
  }

  calculatePremium() {
    // Logic to calculate premium based on coverage, age, etc.
    return 299.99
  }

  getDetails() {
    return {
      planName: this.name,
      provider: this.provider,
      coverage: this.coverage,
      premium: this.calculatePremium(),
      deductible: this.deductible,
      copay: this.copay
    }
  }

  compareWith(planId) {
    // Logic to compare with another plan
    return {
      priceDifference: 50.00,
      coverageDifference: 'Better prescription coverage',
      recommendation: 'Current plan offers better value'
    }
  }
}

module.exports = InsurancePlan
