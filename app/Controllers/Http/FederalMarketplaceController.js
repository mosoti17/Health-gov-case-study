'use strict'

const FederalMarketplace = use('App/Models/FederalMarketplace')

class FederalMarketplaceController {
  async getMarketplaceInfo({ response }) {
    const marketplace = await FederalMarketplace.first()
    
    return response.json({
      platformId: marketplace.id,
      openEnrollment: marketplace.openEnrollment,
      availablePlans: await marketplace.insurancePlans().count()
    })
  }

  async browseInsurancePlans({ request, response }) {
    const marketplace = await FederalMarketplace.first()
    const filters = request.get()
    
    const plans = await marketplace.browseInsurancePlans(filters)
    return response.json(plans)
  }

  async processEnrollment({ auth, request, response }) {
    const user = await auth.getUser()
    const { planId } = request.only(['planId'])
    
    const marketplace = await FederalMarketplace.first()
    const enrollmentResult = await marketplace.processEnrollment(user.id, planId)
    
    if (enrollmentResult) {
      return response.json({
        message: 'Enrollment processed successfully',
        success: true
      })
    } else {
      return response.status(400).json({
        message: 'Enrollment failed',
        success: false
      })
    }
  }
}

module.exports = FederalMarketplaceController
