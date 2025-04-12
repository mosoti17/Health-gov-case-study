'use strict'

const ContactInfo = use('App/Models/ContactInfo')
const User = use('App/Models/User')

class ContactInfoSeeder {
  async run() {
    const users = await User.all()
    
    const contactInfos = [
      {
        address_line1: '123 Main Street',
        address_line2: 'Apt 4B',
        city: 'New York',
        state: 'NY',
        zip_code: '10001',
        phone_number: '212-555-1234',
        secondary_phone: '212-555-5678',
        email: 'john.doe@example.com'
      },
      {
        address_line1: '456 Oak Avenue',
        address_line2: '',
        city: 'Los Angeles',
        state: 'CA',
        zip_code: '90001',
        phone_number: '323-555-2345',
        secondary_phone: '',
        email: 'jane.smith@example.com'
      },
      {
        address_line1: '789 Pine Drive',
        address_line2: 'Suite 101',
        city: 'Chicago',
        state: 'IL',
        zip_code: '60601',
        phone_number: '312-555-3456',
        secondary_phone: '312-555-7890',
        email: 'mike.brown@example.com'
      },
      {
        address_line1: '321 Cedar Road',
        address_line2: '',
        city: 'Houston',
        state: 'TX',
        zip_code: '77001',
        phone_number: '713-555-4567',
        secondary_phone: '',
        email: 'sarah.jones@example.com'
      },
      {
        address_line1: '654 Maple Lane',
        address_line2: 'Unit 7C',
        city: 'Boston',
        state: 'MA',
        zip_code: '02101',
        phone_number: '617-555-5678',
        secondary_phone: '617-555-1234',
        email: 'david.wilson@example.com'
      }
    ]
    
    // Associate contact info with users
    for (let i = 0; i < users.rows.length; i++) {
      await ContactInfo.create({
        ...contactInfos[i],
        user_id: users.rows[i].id
      })
    }
  }
}

module.exports = ContactInfoSeeder