const request = require('supertest');
const User = require('../../../src/models/User');
const app = require('../../../src/app');
const mongoose = require('mongoose');


describe('Get User Controller', ()=> {
    beforeAll(()=>
        User.deleteMany({}))
    afterAll(()=>{
        mongoose.connection.close();
    })

    describe('when sen a id',() =>{
        it('should be return an user', ()=>{  
            return User.create({
                name: 'jose123',
                email: 'kaioneguim@gmail.com',
                password: 'ola123'
            })
            .then((user) => 
                request(app)
                    .get('/api/user/' + user.id)
                    .expect('Content-Type', 'application/json; charset=utf-8')
                    .expect(200)
                    .then((res)=> {
                        expect(res.body._id).toEqual(user.id)
                    }
                )
            )
            
        })
    })
})

