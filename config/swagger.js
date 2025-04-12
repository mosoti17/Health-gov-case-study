'use strict'

module.exports = {
  title: 'HealthGov API Documentation',
  version: '1.0.0',
  basePath: '/',
  
  // Specify that we're using YAML
  swaggerDefinition: {
    info: {
      title: 'HealthGov API Documentation',
      version: '1.0.0',
      description: 'API for the Health Government Application for insurance enrollment and management'
    },
    basePath: '/',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization'
      }
    }
  },
  
  // Path to your YAML file
  apis: ['./resources/swagger/swagger.yaml']
}