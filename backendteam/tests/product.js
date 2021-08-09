//Require env
require("dotenv");

//Require Module
const chai = require("chai");
const chaiHttp = require("chai-http");
const cors = require("cors");

const app = require("../app");

const expect = chai.expect;

//Configure chai
chai.use(chaiHttp);
chai.should();

describe("Product", () => {
  describe("GET Product by ID", () => {
    it("Should GET data product", (done) => {
      chai
        .request(app)
        .get("/api/productDetail/610eaebbf677967a14f5f703")
        .end((err, res) => {
          expect(res.body.statusCode).to.equal(200);
          expect(res.body.data).to.have.property("bundle");
          expect(res.body.bundle).to.be.an("array");
          expect(res.body.bundle[0]).to.have.property("qty");
          expect(res.body.bundle[0]).to.have.property("desc");
          expect(res.body.data).to.have.property("_id");
          expect(res.body.data).to.have.property("name");
          expect(res.body.data).to.have.property("summary");
          expect(res.body.data).to.have.property("price");
          expect(res.body.data).to.have.property("description");

          done();
        });
    });
  });
});
