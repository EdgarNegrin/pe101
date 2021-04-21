import { MapReduce } from './template'

export class AddMapReduce extends MapReduce {
  constructor(data: number[], fun: (data: number) => number) {
    super(data, fun);
  }
  protected reduce(datas: number[]): number {
    let sol: number = 0;
    datas.forEach((element) => {
      sol = sol + element;
    })
    return sol;
  }
}