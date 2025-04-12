'use strict'

const Application = use('App/Models/Application')
const User = use('App/Models/User')
const InsurancePlan = use('App/Models/InsurancePlan')

class ApplicationSeeder {
  async run() {
    const users = await User.all()
    const plans = await InsurancePlan.all()
    
    const now = new Date()
    const twoWeeksAgo = new Date(now)
    twoWeeksAgo.setDate(now.getDate() - 14)
    
    const oneWeekAgo = new Date(now)
    oneWeekAgo.setDate(now.getDate() - 7)
    
    const threeWeeksAgo = new Date(now)
    threeWeeksAgo.setDate(now.getDate() - 21)
    
    // Create applications for each user
    for (let i = 0; i < users.rows.length; i++) {
      const user = users.rows[i]
      
      // First application - different status for each user
      let status, submissionDate, decisionDate, decisionNotes, planId
      
      switch(i) {
        case 0:
          status = 'approved'
          submissionDate = threeWeeksAgo
          decisionDate = oneWeekAgo
          decisionNotes = 'Application approved after verification of income'
          planId = plans.rows[0].id
          break
        case 1:
          status = 'pending'
          submissionDate = twoWeeksAgo
          decisionDate = null
          decisionNotes = null
          planId = plans.rows[1].id
          break
        case 2:
          status = 'under_review'
          submissionDate = twoWeeksAgo
          decisionDate = null
          decisionNotes = 'Additional information requested regarding income verification'
          planId = plans.rows[3].id
          break
        case 3:
          status = 'rejected'
          submissionDate = threeWeeksAgo
          decisionDate = oneWeekAgo
          decisionNotes = 'Does not meet eligibility requirements due to existing employer coverage'
          planId = plans.rows[4].id
          break
        case 4:
          status = 'approved'
          submissionDate = threeWeeksAgo
          decisionDate = oneWeekAgo
          decisionNotes = 'Premium tax credit approved'
          planId = plans.rows[6].id
          break
      }
      
      await Application.create({
        user_id: user.id,
        insurance_plan_id: planId,
        status: status,
        submission_date: submissionDate,
        decision_date: decisionDate,
        decision_notes: decisionNotes
      })
      
      // Add a second application for one user
      if (i === 0) {
        await Application.create({
          user_id: user.id,
          insurance_plan_id: plans.rows[2].id,
          status: 'pending',
          submission_date: oneWeekAgo,
          decision_date: null,
          decision_notes: null
        })
      }
    }
  }
}

module.exports = ApplicationSeeder