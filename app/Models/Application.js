'use strict'

const Model = use('Model')

class Application extends Model {
  static get statuses() {
    return {
      PENDING: 'pending',
      APPROVED: 'approved',
      REJECTED: 'rejected',
      UNDER_REVIEW: 'under_review'
    }
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

  financialInfo() {
    return this.hasOne('App/Models/FinancialInfo')
  }

  insurancePlan() {
    return this.belongsTo('App/Models/InsurancePlan')
  }

  async submitApplication() {
    this.status = Application.statuses.PENDING
    await this.save()
    return true
  }

  async checkEligibility() {
    // Logic to check eligibility
    return {
      eligible: true,
      reasons: [],
      score: 85
    }
  }

  async updateInfo(newInfo) {
    this.merge(newInfo)
    await this.save()
    return true
  }
}

module.exports = Application
