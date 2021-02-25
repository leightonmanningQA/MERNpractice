const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http")
chai.use(chaiHttp); //associate the module with chai
const app = require('../server')

describe(`A Simple test `, () => {
    //does 1+1 =2
    it(`should return 2 when 1+1`, () => {
        const expression = 1 + 1;
        expect(expression).to.equal(2)
    });

    it("Another test", () => {
        const val = null;
        expect(val).to.be.null;
    })

})

describe(`Task Routes`, () => {
    //check if the call is successful 
    //app = http://localhost:5019
    // it(`Test /hello route`, (done) => {
    //     chai.request(app)
    //         .get("/hello")
    //         .end((err, response) => {
    //             if (err) {
    //                 console.log(`something went wrong`);
    //             }
    //             expect(response).to.have.status(200);
    //             expect(response).to.not.be.null;
    //             done();
    //         });
    // });
    it(`Test /getAll route`, (done)=>{
        //request is to http://localhost:5019/product/getall
        chai.request(app)
        .get("/task/getAll")
        .end((err,response)=>{
            if(err) done(err);
            expect(response).to.have.status(200);
            expect(response.body).to.not.be.null;
            response.body.map((task)=>expect(task).to.contain.key("_id"));
            response.body.map((task)=> expect(task).to.be.a('object'));
            response.body.map((task)=>expect(task._id).to.be.a("string"));
            done();
        });
    });

    it(`Test /create route`,(done)=>{
        chai.request(app)
        .post("/task/create")
        .send({'name':"xbox"})
        .end((err,response)=>{
            if(err) done(err);
            expect(err).to.be.null;
            expect(response).to.not.be.undefined;
            expect(response).to.have.status(201);
            expect(response).to.have.property('text', 'xbox has been added successfully')
            done();
        })
    })

    after(()=>{
        app.close();
    })
});