const request = require('supertest');
const express = require('express');

const app = require('../../../src/app');
const id = '6748ca4a1971bc9eddd80f07'
describe('Get User Controller', ()=> {
    describe('when sen a id',() =>{
        it('should be return an user', ()=>{ 
                 
            return request(app)
            .get('/api/user/' + id)
            .expect('Content-Type', 'application/json; charset=utf-8')
            .expect(200)
            .then((res)=> {
                expect(res.body._id).toEqual(id)
            })
        })
    })
})

