const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { SECRETKEY } = require('../helpers/HttpRequests')
const { expect } = chai;


// asertion style
chai.should();
chai.use(chaiHttp);

const loginDetails = { secretKey: SECRETKEY, email: "bbb@gmail.com", password: "123456" };

describe("Server!", () => {
    it("Check localhost", done => {
        chai
            .request(app)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
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
                res.should.have.status(200);
                done();
            });
    });

    it("Get Categories by parent", done => {
        chai
            .request(app)
            .get("/categories/parent/mens-clothing")
            .end((err, res) => {
                res.should.have.status(200);
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

    it("Get Categories Products", done => {
        chai
            .request(app)
            .get("/category/mens-clothing-jackets")
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
            .get('/product/21736758')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });

    it("Product search by primary category", done => {
        chai
            .request(app)
            .get('/categories/parent/mens')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
})


describe("Authentification", () => {
    it("User sign in", done => {
        chai
            .request(app).post('/auth/signin')
            .send({ secretKey: SECRETKEY, email: "bbb@gmail.com", password: "123456" })
            .end((error, res) => {
                res.status.should.equal(200);
                token = res.body.token;
                res.type.should.equal('text/html');
                done();
            })
            .catch((error) => done(error));
    });

    it("User sign out", done => {
        chai
            .request(app).get('/auth/signout')
            .then((res) => {
                res.should.have.status(200);
                done();
            }).catch((error) => done(error));
    });
})

describe('Cart Services', () => {

    it('View', done => (
        chai.request(app).post('/auth/signin')
            .send(loginDetails)
            .end((error, res) => {
                chai.request(app).get('/cart')
                    .then((res) => {
                        res.should.have.status(200);
                        done();
                    })
            })
    ))
})
