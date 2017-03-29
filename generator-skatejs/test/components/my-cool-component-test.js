import { expect } from 'chai';
import { h, mount } from 'bore';

describe('my-cool-component component', function() {
  it('renders', function() {
    return mount(<my-cool-component></my-cool-component>).wait((wrapper) => {
      const { node: p } = wrapper.one('p');

      expect(p.innerHTML).to.equal('Hello, world! I am my-cool-component!');
    });
  });
});
