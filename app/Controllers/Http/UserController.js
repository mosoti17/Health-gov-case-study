'use strict'

const User = use('App/Models/User')
const PersonalInfo = use('App/Models/PersonalInfo')
const ContactInfo = use('App/Models/ContactInfo')

class UserController {
  async register({ request, response }) {
    const userData = request.only(['email', 'password', 'username'])
    const personalInfoData = request.input('personalInfo')
    const contactInfoData = request.input('contactInfo')

    const user = await User.create(userData)
    
    await PersonalInfo.create({
      ...personalInfoData,
      user_id: user.id
    })
    
    await ContactInfo.create({
      ...contactInfoData,
      user_id: user.id
    })

    return response.created(user)
  }

  async login({ request, auth, response }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return response.json(token)
  }

  async getProfile({ auth, response }) {
    const user = await auth.getUser()
    const personalInfo = await user.personalInfo().fetch()
    const contactInfo = await user.contactInfo().fetch()
    
    return response.json({
      user,
      personalInfo,
      contactInfo
    })
  }

  async updateProfile({ auth, request, response }) {
    const user = await auth.getUser()
    const userData = request.only(['email', 'username'])
    const personalInfoData = request.input('personalInfo')
    const contactInfoData = request.input('contactInfo')
    
    user.merge(userData)
    await user.save()
    
    if (personalInfoData) {
      const personalInfo = await user.personalInfo().fetch()
      personalInfo.merge(personalInfoData)
      await personalInfo.save()
    }
    
    if (contactInfoData) {
      const contactInfo = await user.contactInfo().fetch()
      contactInfo.merge(contactInfoData)
      await contactInfo.save()
    }
    
    return response.json({
      message: 'Profile updated successfully',
      user
    })
  }
}

module.exports = UserController