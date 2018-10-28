'use strict';

const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');

const expect = chai.expect;

chai.use(chaiHTTP);
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL, PORT} = require('../config');


describe('earbugs', function () {

    describe('EarBugs API Resources', function () {

        before(function () {
            return runServer(TEST_DATABASE_URL);
        });
    
    
        after(function () {
            return closeServer();
        });

    it('Should return a 200 status and be HTML', function(){

        return chai.request(app)
        .get('/')
        .then(function(res){
            //expect(res).to.be('HTML');
            expect(res).to.have.status(200);
        })

    });

    it('should return videos on GET', function() {
        return chai.request(app)
        .get('/videos')
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array')
        })
    })

    it('should post a video on POST', function(){
        const testVid={
            video1: 'a',
            video2:'b',
            start1: '1:00',
            start2: '0:00',
            end1: '1:01',
            end2: '0:01',
            title: 'test'
        }
        .post('/videos')
        .send(testVid)
        .then(function(res){
            expect(res).to.have.status(201);
            expect(res).to.be.json;
            expect(res.body.id).to.not.equal(null)
        })
    })

    it('should delete a video on delete', function(){
        return chai.request(app)

        .get('/videos')
        .then(function(res){
            return chai.request(app)
            .delete(`/videos/{${res.body[0].id}`)
        })
        .then(function(res){
            expect(res).to.have.status(204)
        });
    });
})
})