const expect = require("chai").expect
const netfunc = require("../index")


describe("Basic Call Tests", () => {
    it("No Args Supplied", () => {
        expect(netfunc.call_trigger("no-arg")).to.equal("done")
    })
})