import { MapReduce } from './template'
/**
 * Subclase para hacer reduce con suma
 */
export class DivMapReduce extends MapReduce {
  /**
   * Constructor
   * @param data Operandos
   * @param fun funcion para map
   */
  constructor(data: number[], fun: (data: number) => number) {
    super(data, fun);
  }
  /**
   * Metodo reduce con suma
   * @param datas operandos
   * @returns solucion
   */
  protected reduce(datas: number[]): number {
    let sol: number = datas[0];
    datas.forEach((element) => {
      sol = sol / element;
    })
    return sol;
  }
  /**
   * Metodo hook que imprime el array inicial
   */
  protected printData() {
    console.log(this.data);
  }
}