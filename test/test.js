'use strict';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');

const expect = chai.expect;

chai.use(chaiHTTP);
const { app, runServer, closeServer } = require('../server');
const { TEST_DATABASE_URL, PORT, JWT_SECRET } = require('../config');
const {User} = require('../users')
const jwt = require('jsonwebtoken');



describe('earbugs', function () {

    describe('EarBugs API Resources', function () {

        before(function () {
            return runServer(TEST_DATABASE_URL);
        });


        after(function () {
            return closeServer();
        });

        const username = 'exampleUser';
        const password = 'examplePass';
        const firstName = 'Example';
        let user;

        beforeEach(function () {
            return User.hashPassword(password).then(password =>
                User.create({
                    username,
                    password,
                    firstName
                })
                .then(u=>user=u.serialize())
            );
        });

        afterEach(function () {
            return User.remove({});
        });

        it('should return videos on GET', function () {
            return chai.request(app)
                .get('/videos')
                .then(function (res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array')
                })
        })

        it('should post a video on POST', function () {
            const testVid = {
                video1: 'a',
                video2: 'b',
                start1: '1:00',
                start2: '0:00',
                end1: '1:01',
                end2: '0:01',
                title: 'test'
            }
            const token = jwt.sign(
                {
                  user
                },
                JWT_SECRET,
                {
                  algorithm: 'HS256',
                  expiresIn: '7d'
                }
              );

              console.log(user)

            return chai.request(app)        
                .post('/videos')
                .set('Authorization', `Bearer ${token}`)
                .send(testVid)
                .then(function (res) {
                    expect(res).to.have.status(201);
                    expect(res).to.be.json;
                    expect(res.body.id).to.not.equal(null)
                })
        })

        it('should delete a video on delete', function () {

            const token = jwt.sign(
                {
                  user
                },
                JWT_SECRET,
                {
                  algorithm: 'HS256',
                  expiresIn: '7d'
                }
              );

            return chai.request(app)

                .get('/videos')
                .set('Authorization', `Bearer ${token}`)
                .then(function (res) {
                    return chai.request(app)
                        .delete(`/videos/${res.body[0].id}`)
                        .set('Authorization', `Bearer ${token}`)
                        
                })
                .then(function (res) {
                    expect(res).to.have.status(204)
                });
        });
    })
})