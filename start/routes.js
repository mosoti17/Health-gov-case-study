'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('docs', ({view}) => {
  return view.render('docs.redoc');
})
Route.get('/swagger.yaml', 'SwaggerController.index')


// Auth routes
Route.post('register', 'UserController.register')
Route.post('login', 'UserController.login')

// User routes
Route.group(() => {
  Route.get('profile', 'UserController.getProfile')
  Route.put('profile', 'UserController.updateProfile')
}).prefix('users').middleware(['auth'])

// Application routes
Route.group(() => {
  Route.post('/', 'ApplicationController.create')
  Route.get('/', 'ApplicationController.getApplications')
  Route.get('/:id', 'ApplicationController.getApplication')
  Route.get('/:id/eligibility', 'ApplicationController.checkEligibility')
  Route.put('/:id', 'ApplicationController.updateApplication')
}).prefix('applications').middleware(['auth'])

// Insurance Plan routes
Route.group(() => {
  Route.get('/', 'InsurancePlanController.index')
  Route.get('/:id', 'InsurancePlanController.show')
  Route.get('/:id/details', 'InsurancePlanController.getPlanDetails')
  Route.get('/:id/compare', 'InsurancePlanController.comparePlans')
  Route.get('/:id/premium', 'InsurancePlanController.calculatePremium')
}).prefix('insurance-plans')

// Federal Marketplace routes
Route.group(() => {
  Route.get('/', 'FederalMarketplaceController.getMarketplaceInfo')
  Route.get('/browse', 'FederalMarketplaceController.browseInsurancePlans')
  Route.post('/enroll', 'FederalMarketplaceController.processEnrollment').middleware(['auth'])
}).prefix('marketplace')