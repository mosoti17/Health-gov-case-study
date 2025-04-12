'use strict'

const CoverageDetails = use('App/Models/CoverageDetail')
const InsurancePlan = use('App/Models/InsurancePlan')

class CoverageDetailsSeeder {
  async run() {
    // Get all plans
    const plans = await InsurancePlan.all()
    
    for (const plan of plans.rows) {
      // Different coverage based on plan level
      let dentalCoverage = false
      let visionCoverage = false
      let additionalCoverage = {}
      
      if (plan.plan_level === 'Gold' || plan.plan_level === 'Platinum') {
        dentalCoverage = true
        visionCoverage = true
        additionalCoverage = {
          wellness_programs: true,
          telemedicine: true,
          alternative_medicine: plan.plan_level === 'Platinum'
        }
      } else if (plan.plan_level === 'Silver') {
        dentalCoverage = false
        visionCoverage = false
        additionalCoverage = {
          wellness_programs: true,
          telemedicine: true,
          alternative_medicine: false
        }
      } else {
        // Bronze
        additionalCoverage = {
          wellness_programs: false,
          telemedicine: true,
          alternative_medicine: false
        }
      }
      
      await CoverageDetails.create({
        insurance_plan_id: plan.id,
        prescription_coverage: true,
        dental_coverage: dentalCoverage,
        vision_coverage: visionCoverage,
        mental_health_coverage: true,
        preventative_care_coverage: true,
        specialist_coverage: true,
        emergency_coverage: true,
        hospitalization_coverage: true,
        additional_coverage: JSON.stringify(additionalCoverage)
      })
    }
  }
}

module.exports = CoverageDetailsSeeder