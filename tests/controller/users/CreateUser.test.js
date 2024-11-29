const request = require('supertest');
const User = require('../../../src/models/User');
const app = require('../../../src/app');
const mongoose = require('mongoose');


describe('Post User Controller', ()=> {
    beforeAll(()=>
        User.deleteMany({}))
    afterAll(()=>{
        mongoose.connection.close();
    })
    describe('when send a user',() =>{
        it('should be return an user', () => {

            const user = {
                name: 'jose1231',
                email: 'kaioneguim123123@gmail.com',
                password: 'ola123'
            };
            
            return request(app)
                    .post('/api/user')
                    .send(user)
                    .expect(201)
                    .then((res)=> {
                        expect(res.body.name).toEqual(user.name)
                    }
                )
             }
            )
        })
    }
)


