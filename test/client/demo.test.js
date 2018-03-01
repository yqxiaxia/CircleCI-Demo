import React from 'react';
import {shallow, render, mount} from 'enzyme';
import {describe, it} from 'mocha';
import {expect} from 'chai';
import Demo from '../../src/client/components/demo.jsx';

describe('test in frontend', () => {
  it('call component shallow', () => {
    const demo = shallow(<Demo/>);
    expect(demo.find('h1').text()).to.equal('this is a title');
  });

  it('call component render', () => {
    const demo = render(<Demo/>);
    expect(demo.find('h1').text()).to.equal('this is a title');
  });

  it('call component mount', () => {
    const demo = mount(<Demo/>);
    expect(demo.find('h1').text()).to.equal('this is a title');
  });

  it('call component button click', () => {
    const demo = mount(<Demo/>);
    expect(demo.find('p').prop('style').visibility).to.equal('visible');
    demo.find('button .changePara').at(0).simulate('click');
    expect(demo.find('p').prop('style').visibility).to.equal('hidden');
  });

});