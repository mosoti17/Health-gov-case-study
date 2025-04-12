'use strict'

const FederalMarketplace = use('App/Models/FederalMarketplace')
const GovernmentAgency = use('App/Models/GovernmentAgency')
const DataServicesHub = use('App/Models/DataServicesHub')

class FederalMarketplaceSeeder {
  async run() {
    // Get references
    const hhsAgency = await GovernmentAgency.findBy('name', 'Department of Health and Human Services')
    const federalHub = await DataServicesHub.findBy('hub_id', 'DSH-FED-001')
    
    // Set enrollment dates
    const now = new Date()
    const currentYear = now.getFullYear()
    const enrollmentStart = new Date(currentYear, 10, 1) // November 1
    const enrollmentEnd = new Date(currentYear, 11, 15) // December 15
    
    await FederalMarketplace.create({
      platform_id: 100001,
      open_enrollment: now >= enrollmentStart && now <= enrollmentEnd,
      enrollment_start_date: enrollmentStart,
      enrollment_end_date: enrollmentEnd,
      government_agency_id: hhsAgency.id,
      data_services_hub_id: federalHub.id
    })
  }
}

module.exports = FederalMarketplaceSeeder