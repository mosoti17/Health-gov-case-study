'use strict'

const Model = use('Model')

class ContactInfo extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }
}


module.exports = ContactInfo