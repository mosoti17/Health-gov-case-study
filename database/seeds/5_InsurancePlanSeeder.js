'use strict'

const InsurancePlan = use('App/Models/InsurancePlan')
const FederalMarketplace = use('App/Models/FederalMarketplace')

class InsurancePlanSeeder {
  async run() {
    const marketplace = await FederalMarketplace.first()
    
    await InsurancePlan.createMany([
      {
        name: 'Basic Bronze Plan',
        provider: 'Aetna',
        plan_level: 'Bronze',
        base_premium: 199.99,
        deductible: 6000.00,
        copay: 30.00,
        max_out_of_pocket: 8000.00,
        federal_marketplace_id: marketplace.id,
        active: true
      },
      {
        name: 'Standard Silver Plan',
        provider: 'Aetna',
        plan_level: 'Silver',
        base_premium: 299.99,
        deductible: 4000.00,
        copay: 25.00,
        max_out_of_pocket: 6000.00,
        federal_marketplace_id: marketplace.id,
        active: true
      },
      {
        name: 'Premium Gold Plan',
        provider: 'Aetna',
        plan_level: 'Gold',
        base_premium: 399.99,
        deductible: 2000.00,
        copay: 15.00,
        max_out_of_pocket: 4000.00,
        federal_marketplace_id: marketplace.id,
        active: true
      },
      {
        name: 'Essential Bronze Plan',
        provider: 'Blue Cross Blue Shield',
        plan_level: 'Bronze',
        base_premium: 189.99,
        deductible: 5500.00,
        copay: 35.00,
        max_out_of_pocket: 8500.00,
        federal_marketplace_id: marketplace.id,
        active: true
      },
      {
        name: 'Enhanced Silver Plan',
        provider: 'Blue Cross Blue Shield',
        plan_level: 'Silver',
        base_premium: 289.99,
        deductible: 3500.00,
        copay: 25.00,
        max_out_of_pocket: 5500.00,
        federal_marketplace_id: marketplace.id,
        active: true
      },
      {
        name: 'Elite Gold Plan',
        provider: 'Blue Cross Blue Shield',
        plan_level: 'Gold',
        base_premium: 389.99,
        deductible: 1500.00,
        copay: 10.00,
        max_out_of_pocket: 3500.00,
        federal_marketplace_id: marketplace.id,
        active: true
      },
      {
        name: 'Platinum Complete Plan',
        provider: 'UnitedHealthcare',
        plan_level: 'Platinum',
        base_premium: 499.99,
        deductible: 0.00,
        copay: 5.00,
        max_out_of_pocket: 2000.00,
        federal_marketplace_id: marketplace.id,
        active: true
      }
    ])
  }
}

module.exports = InsurancePlanSeeder