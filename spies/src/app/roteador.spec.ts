import { Roteador } from './roteador';
import { ProcessadorPar, ProcessadorImpar } from './processador';
import { Mensagem } from './mensagem';

describe('Testes do roteador de mensagens', () => {

  let roteador: Roteador;
  let processadorPar: ProcessadorPar;
  let processadorImpar: ProcessadorImpar;
  
  beforeEach(() => {
    roteador = new Roteador();

    processadorPar = new ProcessadorPar();
    processadorImpar = new ProcessadorImpar();
    
    roteador.adicionar(processadorPar);
    roteador.adicionar(processadorImpar);
  });

  it('O roteador foi criado com sucesso', () => {
    expect(roteador).toBeDefined();
  });

  describe('O roteador dispara o processador correto', () => {

    beforeEach(() => {
      spyOn(processadorPar, 'sabeProcessar').and.callThrough();
      spyOn(processadorPar, 'processar').and.callThrough();

      spyOn(processadorImpar, 'sabeProcessar').and.callThrough();
      spyOn(processadorImpar, 'processar').and.callThrough();
    });

    it('Mensagem com código par é roteada apenas para o processador par', () => {
        let mensagemPar = { codigo: 10, conteudo: 'dez é par' };
        
        roteador.rotear(mensagemPar); 

        expect(processadorPar.sabeProcessar).toHaveBeenCalledWith(mensagemPar);
        expect(processadorImpar.sabeProcessar).not.toHaveBeenCalledWith();

        expect(processadorPar.processar).toHaveBeenCalledWith(mensagemPar);
        expect(processadorImpar.processar).not.toHaveBeenCalled();
    });

    it('Mensagem com código impar é roteada apenas para o processador impar', () => {
        let mensagemImpar = { codigo: 5, conteudo: 'cinco é impar' };
        
        roteador.rotear(mensagemImpar);        

        expect(processadorPar.sabeProcessar).toHaveBeenCalledWith(mensagemImpar);
        expect(processadorImpar.sabeProcessar).toHaveBeenCalledWith(mensagemImpar);

        expect(processadorPar.processar).not.toHaveBeenCalled();
        expect(processadorImpar.processar).toHaveBeenCalledWith(mensagemImpar);    
    });

  });    
});