
import { Processador } from './processador';
import { Mensagem } from './mensagem';

export class Roteador {
  private processadores: Processador[];
    
  constructor() {
    this.processadores = [];
  }
  
  public adicionar(processador: Processador) {
    if (processador) {
      this.processadores.push(processador);
    }
  }

  public rotear(mensagem: Mensagem) {
    this.processadores.forEach((processador) => {
      if (processador.sabeProcessar(mensagem)) {
          processador.processar(mensagem);
          return;
      }
    });
  }
}