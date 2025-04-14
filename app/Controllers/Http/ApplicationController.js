'use strict'

const Application = use('App/Models/Application')
const FinancialInfo = use('App/Models/FinancialInfo')

class ApplicationController {
  async create({ auth, request, response }) {
    const user = await auth.getUser()
    const applicationData = request.only(['status', 'insurance_plan_id'])
    const financialInfoData = request.input('financialInfo')
    
    const application = await Application.create({
      user_id: user.id,
      insurance_plan_id: applicationData.insurance_plan_id,
      status: applicationData.status,
      submission_date: new Date()
    })
    
    await FinancialInfo.create({
      ...financialInfoData,
      application_id: application.id
    })
    
    return response.created(application)
  }

  async getApplications({ auth, response }) {
    const user = await auth.getUser()
    const applications = await user.applications().fetch()
    return response.json(applications)
  }

  async getApplication({ params, response }) {
    const application = await Application.find(params.id)
    if (!application) {
      return response.notFound({ message: 'Application not found' })
    }
    
    await application.loadMany(['financialInfo', 'user'])
    return response.json(application)
  }

  async checkEligibility({ params, response }) {
    const application = await Application.find(params.id)
    if (!application) {
      return response.notFound({ message: 'Application not found' })
    }
    
    const eligibilityResult = await application.checkEligibility()
    return response.json(eligibilityResult)
  }

  async updateApplication({ params, request, response }) {
    const application = await Application.find(params.id)
    if (!application) {
      return response.notFound({ message: 'Application not found' })
    }
    
    const applicationData = request.only(['status'])
    const financialInfoData = request.input('financialInfo')
    
    application.merge(applicationData)
    await application.save()
    
    if (financialInfoData) {
      const financialInfo = await application.financialInfo().fetch()
      financialInfo.merge(financialInfoData)
      await financialInfo.save()
    }
    
    return response.json({
      message: 'Application updated successfully',
      application
    })
  }
}

module.exports = ApplicationController