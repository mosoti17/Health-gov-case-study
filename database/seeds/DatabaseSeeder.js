'use strict'

const { Command } = require('@adonisjs/ace')

class DatabaseSeeder extends Command {
  static get signature() {
    return 'db:seed'
  }

  static get description() {
    return 'Seeds the database with initial data'
  }

  async handle() {
    this.info('Seeding database...')
    
    // Run seeders in order (managing dependencies)
    await this.call('seed:run', { files: ['7_UserSeeder.js'] })
    await this.call('seed:run', { files: ['8_PersonalInfoSeeder.js'] })
    await this.call('seed:run', { files: ['1_GovernmentAgencySeeder.js'] })
    await this.call('seed:run', { files: ['2_DataServicesHubSeeder.js'] })
    await this.call('seed:run', { files: ['4_FederalMarketplaceSeeder.js'] })
    await this.call('seed:run', { files: ['5_InsurancePlanSeeder.js'] })
    await this.call('seed:run', { files: ['9_ContactInfoSeeder.js'] })
    await this.call('seed:run', { files: ['10_ApplicationSeeder.js'] })
    await this.call('seed:run', { files: ['11_FinancialInfoSeeder.js'] })
    await this.call('seed:run', { files: ['6_CoverageDetailsSeeder.js'] })
    
    this.success('Database seeded successfully!')
  }
}

module.exports = DatabaseSeeder