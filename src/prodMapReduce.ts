import { MapReduce } from './template'

export class ProdMapReduce extends MapReduce {
  constructor(data: number[], fun: (data: number) => number) {
    super(data, fun);
  }
  protected reduce(datas: number[]): number {
    let sol: number = 1;
    datas.forEach((element) => {
      sol = sol * element;
    })
    return sol;
  }
}