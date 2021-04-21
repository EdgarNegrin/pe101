
/**
 * Clase Estructura 
 */
export abstract class MapReduce {
  /**
   * Constructor
   * @param data operandos
   * @param fun funcion para map
   */
  constructor(protected data: number[], protected fun: (data: number) => number) {
  }
  /**
   * Ejecucion
   * @returns solucion del reduce
   */
  public run(): number {
    let sol: number[] = []; 

    sol = this.map(this.fun);

    return this.reduce(sol);
  }
  /**
   * Metodo map
   * @param func funcion para mapear
   * @returns array de number con la solucion
   */
  protected map(func: (data: number) => number): number[] {
    let sol: number[] = []
    this.data.forEach((element) => {  
      sol.push(func(element));
    });
    return sol;
  }
  /**
   * Metodo para implementar en subclase
   * @param datas datos a operar
   */
  protected abstract reduce(datas: number[]): number;
  // Hook
  protected print() {}
}
