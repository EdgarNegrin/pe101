import 'mocha';
import {expect} from 'chai';
import {AddMapReduce} from '..//src/addMapReduce';
import {SubMapReduce} from '..//src/subMapReduce';
import {ProdMapReduce} from '..//src/prodMapReduce';
import {DivMapReduce} from '..//src/divMapReduce';

describe('Tests', () => {
  it('addMapReduce', () => {
    let reduceadd = new AddMapReduce([1, 2], (data: number) => {
      return data * 2;
    });
    expect(reduceadd.run()).to.be.equal(6);
  });
  it('SubMapReduce', () => {
    let reducesub = new SubMapReduce([1, 2], function(data: number) {
      return data * 2;
    });
    expect(reducesub.run()).to.be.equal(-2);
  });
  it('ProdMapReduce', () => {
    let reduceprod = new ProdMapReduce([1, 2], function(data: number) {
      return data * 2;
    });
    expect(reduceprod.run()).to.be.equal(8);
  });
  it('DivMapReduce', () => {
    let reducediv = new DivMapReduce([1, 2], function(data: number) {
      return data * 2;
    });
    expect(reducediv.run()).to.be.equal(0.5);
  });
});
 