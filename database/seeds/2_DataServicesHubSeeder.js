'use strict'

const DataServicesHub = use('App/Models/DataServicesHub')

class DataServicesHubSeeder {
  async run() {
    await DataServicesHub.createMany([
      {
        hub_id: 'DSH-FED-001',
        name: 'Federal Data Services Hub',
        description: 'Central hub for federal health insurance marketplace data exchange',
        data_types: JSON.stringify(['financial', 'identity', 'immigration', 'tax']),
        active: true
      },
      {
        hub_id: 'DSH-STATE-NY',
        name: 'New York Data Exchange Gateway',
        description: 'State level data exchange gateway for New York',
        data_types: JSON.stringify(['medicaid', 'state-benefits', 'state-tax']),
        active: true
      },
      {
        hub_id: 'DSH-STATE-CA',
        name: 'California Health Information Exchange',
        description: 'State level health information exchange for California',
        data_types: JSON.stringify(['medicaid', 'state-benefits', 'state-tax']),
        active: true
      }
    ])
  }
}

module.exports = DataServicesHubSeeder