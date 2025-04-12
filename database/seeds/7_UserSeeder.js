'use strict'

const Hash = use('Hash')
const User = use('App/Models/User')

class UserSeeder {
  async run() {
    // Create sample users
    await User.createMany([
      {
        username: 'johndoe',
        email: 'john.doe@example.com',
        password: await Hash.make('password123')
      },
      {
        username: 'janesmith',
        email: 'jane.smith@example.com',
        password: await Hash.make('password123')
      },
      {
        username: 'mikebrown',
        email: 'mike.brown@example.com',
        password: await Hash.make('password123')
      },
      {
        username: 'sarahjones',
        email: 'sarah.jones@example.com',
        password: await Hash.make('password123')
      },
      {
        username: 'davidwilson',
        email: 'david.wilson@example.com',
        password: await Hash.make('password123')
      }
    ])
  }
}

module.exports = UserSeeder