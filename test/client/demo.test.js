import React from 'react';
import {shallow} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';
import Demo from '../../src/client/components/demo.jsx';

describe('test in frontend', () => {
  it('call component mount', () => {
    const demo = shallow(<Demo/>);
    expect(demo.html()).to.equal('<div><h1>this is a title</h1><p>this is a paragraph</p></div>');
  });
});