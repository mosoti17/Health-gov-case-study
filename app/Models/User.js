'use strict'

const Model = use('Model')
const Hash = use('Hash')

class User extends Model {
  static boot() {
    super.boot()
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  personalInfo() {
    return this.hasOne('App/Models/PersonalInfo')
  }

  contactInfo() {
    return this.hasOne('App/Models/ContactInfo')
  }

  applications() {
    return this.hasMany('App/Models/Application')
  }

  async authenticate() {
    // Authentication logic
    return true
  }

  async submitApplication(applicationData) {
    await Application.create({
      user_id: this.id,
      insurance_plan_id: applicationData.insurance_plan_id,
      status: applicationData.status,
      submission_date: new Date(now)
    })
    const application = new Application()
    application.fill(applicationData)
    application.user_id = this.id
    await application.save()
    return application
  }

  async selectPlan(planId) {
    const plan = await InsurancePlan.find(planId)
    return plan
  }
}

module.exports = User