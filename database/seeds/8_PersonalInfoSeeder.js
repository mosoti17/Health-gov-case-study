'use strict'

const PersonalInfo = use('App/Models/PersonalInfo')
const User = use('App/Models/User')

class PersonalInfoSeeder {
  async run() {
    const users = await User.all()
    
    const personalInfos = [
      {
        first_name: 'John',
        last_name: 'Doe',
        date_of_birth: '1980-05-15',
        ssn: '123-45-6789',
        gender: 'Male'
      },
      {
        first_name: 'Jane',
        last_name: 'Smith',
        date_of_birth: '1985-08-22',
        ssn: '234-56-7890',
        gender: 'Female'
      },
      {
        first_name: 'Mike',
        last_name: 'Brown',
        date_of_birth: '1975-12-10',
        ssn: '345-67-8901',
        gender: 'Male'
      },
      {
        first_name: 'Sarah',
        last_name: 'Jones',
        date_of_birth: '1990-03-27',
        ssn: '456-78-9012',
        gender: 'Female'
      },
      {
        first_name: 'David',
        last_name: 'Wilson',
        date_of_birth: '1978-11-05',
        ssn: '567-89-0123',
        gender: 'Male'
      }
    ]
    
    // Associate personal info with users
    for (let i = 0; i < users.rows.length; i++) {
      await PersonalInfo.create({
        ...personalInfos[i],
        user_id: users.rows[i].id
      })
    }
  }
}

module.exports = PersonalInfoSeeder