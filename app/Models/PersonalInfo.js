'use strict'

const Model = use('Model')

class PersonalInfo extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = PersonalInfo
