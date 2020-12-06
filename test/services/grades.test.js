const app = require('../../src/app');

describe('\'grades\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/grades');
    expect(service).toBeTruthy();
  });
});
