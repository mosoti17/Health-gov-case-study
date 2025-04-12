'use strict'

const InsurancePlan = use('App/Models/InsurancePlan')

class InsurancePlanController {
  async index({ request, response }) {
    const { provider, minPremium, maxPremium } = request.get()
    
    const query = InsurancePlan.query()
    
    if (provider) {
      query.where('provider', provider)
    }
    
    // Additional filtering logic here
    
    const plans = await query.fetch()
    return response.json(plans)
  }

  async show({ params, response }) {
    const plan = await InsurancePlan.find(params.id)
    if (!plan) {
      return response.notFound({ message: 'Insurance plan not found' })
    }
    
    return response.json(plan)
  }

  async getPlanDetails({ params, response }) {
    const plan = await InsurancePlan.find(params.id)
    if (!plan) {
      return response.notFound({ message: 'Insurance plan not found' })
    }
    
    const details = plan.getDetails()
    return response.json(details)
  }

  async comparePlans({ params, request, response }) {
    const planA = await InsurancePlan.find(params.id)
    if (!planA) {
      return response.notFound({ message: 'Base insurance plan not found' })
    }
    
    const { compareToPlanId } = request.get()
    
    const comparison = await planA.compareWith(compareToPlanId)
    return response.json(comparison)
  }

  async calculatePremium({ params, request, response }) {
    const plan = await InsurancePlan.find(params.id)
    if (!plan) {
      return response.notFound({ message: 'Insurance plan not found' })
    }
    
    // User details can be passed to calculate personalized premium
    const { age, zipCode, tobaccoUser } = request.get()
    
    const premium = plan.calculatePremium()
    return response.json({ premium })
  }
}

module.exports = InsurancePlanController