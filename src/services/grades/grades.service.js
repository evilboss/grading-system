// Initializes the `grades` service on path `/api/grades`
const { Grades } = require('./grades.class');
const createModel = require('../../models/grades.model');
const hooks = require('./grades.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/api/grades', new Grades(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('api/grades');

  service.hooks(hooks);
};
