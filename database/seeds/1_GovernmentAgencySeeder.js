'use strict'

const Factory = use('Factory')
const GovernmentAgency = use('App/Models/GovernmentAgency')

class GovernmentAgencySeeder {
  async run() {
    await GovernmentAgency.createMany([
      {
        name: 'Department of Health and Human Services',
        type: 'federal',
        jurisdiction: 'United States',
        description: 'Federal department focused on health and providing human services',
        contact_email: 'contact@hhs.gov',
        contact_phone: '1-800-123-4567'
      },
      {
        name: 'Internal Revenue Service',
        type: 'federal',
        jurisdiction: 'United States',
        description: 'Federal tax collection agency',
        contact_email: 'contact@irs.gov',
        contact_phone: '1-800-829-1040'
      },
      {
        name: 'Centers for Medicare & Medicaid Services',
        type: 'federal',
        jurisdiction: 'United States',
        description: 'Federal agency administering Medicare and Medicaid',
        contact_email: 'contact@cms.gov',
        contact_phone: '1-800-633-4227'
      },
      {
        name: 'New York State Department of Health',
        type: 'state',
        jurisdiction: 'New York',
        description: 'State health department of New York',
        contact_email: 'contact@health.ny.gov',
        contact_phone: '1-866-881-2809'
      },
      {
        name: 'California Department of Health Care Services',
        type: 'state',
        jurisdiction: 'California',
        description: 'State health services department of California',
        contact_email: 'contact@dhcs.ca.gov',
        contact_phone: '1-916-445-4171'
      }
    ])
  }
}

module.exports = GovernmentAgencySeeder