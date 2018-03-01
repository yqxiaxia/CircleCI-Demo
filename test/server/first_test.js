import first from '../src/first';
import assert from 'assert';
import {describe, it} from 'mocha';

describe('test in backend', () => {
  it('should return 2 when 1 add 1' , () => {
    let result = first.addNumber(1,1);
    assert.equal(result,2);
  });
});