const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { SECRETKEY } = require('../helpers/HttpRequests')

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
    it("Check localhost", done => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                // expect(res.body.status).to.equals("success");
                // expect(res.body.message).to.equals("Welcome To Testing API");
                done();
            });
    });

});

describe("Categories tests", () => {

    it("Check get All Categories URL", done => {
        chai
            .request(app)
            .get("/categories")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("Get Categories by parent", done => {
        chai
            .request(app)
            .get("/categories/parent/mens-clothing")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it("Get Categories by id", done => {
        chai
            .request(app)
            .get("/categories/mens-clothing-jackets")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe("Products checks", () => {
    it("Product search by ID", done => {
        chai
            .request(app)
            .get('/products/product_search?id=25565189')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });

    it("Product search by Page", done => {
        chai
            .request(app)
            .get('/products/product_search?page=2')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });

    it("Product search by primary category", done => {
        chai
            .request(app)
            .get('/categories/mens-clothing')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            })
    });
})

describe("Authentification", () => {
    it("User register", done => {
        chai
            .request(app).post('/auth/signup')
            .send({ secretKey: SECRETKEY, name: "TestSubject", email: "testEmail@gmail.com", password: "123456" })
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            }).catch((error) => done(error));
    })


    it("User sign in", done => {
        chai
            .request(app).post('/auth/signin')
            .send({ secretKey: SECRETKEY, email: "bbb@gmail.com", password: "123456" })
            .then((res) => {
                expect(res).to.have.status(200);
                done();
            }).catch((error) => done(error));
    })


})