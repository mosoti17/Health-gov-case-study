'use strict'

const FinancialInfo = use('App/Models/FinancialInfo')
const Application = use('App/Models/Application')

class FinancialInfoSeeder {
  async run() {
    const applications = await Application.all()
    
    // Prepare financial data based on application
    for (const application of applications.rows) {
      // Vary financial data based on application ID
      const annualIncome = 30000 + (application.id * 5000)
      const householdSize = (application.id % 4) + 1
      
      await FinancialInfo.create({
        application_id: application.id,
        annual_income: annualIncome,
        household_size: householdSize,
        tax_filing_status: application.id % 2 === 0, // alternating between joint and single
        requesting_subsidy: annualIncome < 75000,
        employer_coverage: application.status === 'rejected',
        medicaid_eligible: annualIncome < 25000
      })
    }
  }
}

module.exports = FinancialInfoSeeder