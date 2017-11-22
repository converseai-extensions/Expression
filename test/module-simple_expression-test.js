/**
 * @file test/module-simple_expression-test.js
 * @author graeme@converse.ai
 * @description Evaluate a one line expression. E.g. `1 + 2` will
 * return 3.
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */

const request     = require('supertest');
const expect      = require('chai').expect;
const server      = require('./lib/express');

describe('Simple Expression', function () {

  it('no input', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'simple_expression',
          moduleParam: {
            input: undefined
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(1);
        expect(res.body).to.have.property('error').to.have.property('httpStatus').to.equal(400);
        done();
      });
  })

  it('1 + 1 = 2', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'simple_expression',
          moduleParam: {
            input: '1 + 1'
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('value').to.have.property('result').to.equal(2);
        done();
      });
  })

  it('"Hello" + ", World!" = "Hello, World!"', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'simple_expression',
          moduleParam: {
            input: '"Hello" + ", World!"'
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('value').to.have.property('result').to.equal('Hello, World!');
        done();
      });
  })

});