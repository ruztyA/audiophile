//Require dotenv
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

describe("Checkout", () => {
  describe("GET Checkout by ID", () => {
    it("Should GET data checkout", (done) => {
      chai
        .request(app)
        .get("/api/checkout/61108fcdb7dcd30470761e35")
        .end((err, res) => {
          expect(res.body.statusCode).to.equal(200);
          expect(res.body.data).to.have.property("products");
          expect(res.body.data.products).to.be.an("array");
          expect(res.body.data).to.have.property("total");
          expect(res.body.data).to.have.property("grand_total");
          expect(res.body.data).to.have.property("payment");
          expect(res.body.data.payment).to.be.an("object");

          done();
        });
    });
  });
});
