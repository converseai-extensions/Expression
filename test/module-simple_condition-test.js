/**
 * @file test/module-simple_condition-test.js
 * @author graeme@converse.ai
 * @description Evaluate a simple expression and reroute path accoridingly.
 *
 * Generated by the converse-cli tool for use with the Converse AI
 * Plugins SDK. https://developers.converse.ai/
 */

const request     = require('supertest');
const expect      = require('chai').expect;
const server      = require('./lib/express');

describe('Simple Condition', function () {

  it('no input', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'simple_condition',
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

  it('1 === 1 = True', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'simple_condition',
          moduleParam: {
            input: '1 === 1'
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('exit').to.equal('True');
        done();
      });
  })

  it('1 === 2 = False', function(done) {
    request(server)
      .post('/')
      .send({
        event: 'MODULE_EXEC',
        payload: {
          moduleId: 'simple_condition',
          moduleParam: {
            input: '1 === 2'
          }
        }
      })
      .set('X_CONVERSE_APP_TOKEN', require('../app-token'))
      .expect(200)
      .end(function(err, res) {
        expect(res.body).to.have.property('status').to.equal(0);
        expect(res.body).to.have.property('exit').to.equal('False');
        done();
      });
  })

});