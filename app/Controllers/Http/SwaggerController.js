// app/Controllers/Http/SwaggerController.js
'use strict'

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

class SwaggerController {
  async index({ response }) {
    try {
      const swaggerYamlPath = path.join(__dirname, '../../../resources/swagger/swagger.yaml')
      const swaggerYaml = fs.readFileSync(swaggerYamlPath, 'utf8')
      const swaggerJson = yaml.load(swaggerYaml)
      return response.json(swaggerJson)
    } catch (error) {
      console.error('Error loading Swagger documentation:', error)
      return response.status(500).send('Error loading API documentation')
    }
  }
}

module.exports = SwaggerController