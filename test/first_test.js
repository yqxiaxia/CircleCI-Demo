let first = require("../src/first");
let assert = require("assert");

describe("test in project", () => {
  it("should return 2 when 1 add 1" , () => {
    let result = first.addNumber(1,1);
    assert.equal(result,2);
  })
});