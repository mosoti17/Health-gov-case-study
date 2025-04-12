'use strict'

const Application = use('App/Models/Application')
const FinancialInfo = use('App/Models/FinancialInfo')

class ApplicationController {
  async create({ auth, request, response }) {
    const user = await auth.getUser()
    const applicationData = request.only(['status'])
    const financialInfoData = request.input('financialInfo')
    
    const application = await user.submitApplication(applicationData)
    
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