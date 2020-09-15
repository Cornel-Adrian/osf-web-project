const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

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

  it("Check get All Categories URL", done => {
    chai
      .request(app)
      .get("/categories")
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect(res.body.status).to.equals("success");
        // expect(res.body.result).to.equals(10);
        done();
      });
  });
});