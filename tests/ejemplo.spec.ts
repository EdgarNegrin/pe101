import 'mocha';
import {expect} from 'chai';
import {holamundo} from '..//src/index'

describe('Tests', () => {
  it('Hola mundo', () => {
    expect(holamundo()).to.be.equal("Hola mundo");
  });
});
 