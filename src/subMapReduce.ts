import { MapReduce } from './template'

/**
 * Subclase para hacer reduce con suma
 */
export class SubMapReduce extends MapReduce {
  /**
   * Constructor
   * @param data Operandos
   * @param fun funcion para map
   */
  constructor(data: number[], fun: (data: number) => number) {
    super(data, fun);
  }
  /**
   * Metodo reduce con 
   * @param datas 
   * @returns 
   */
  protected reduce(datas: number[]): number {
    let sol: number = 0;
    let flag: boolean = false;
    datas.forEach((element) => {
      if (flag === false) {
        sol = element;
        flag = true;
      } else {
        sol = sol - element;
      }
    })
    return sol;
  }
}