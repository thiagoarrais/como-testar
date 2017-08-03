import { Mensagem } from './mensagem';

export abstract class Processador {
    public abstract sabeProcessar(mensagem: Mensagem): boolean;
    public abstract processar(mensagem: Mensagem): void;
}

export class ProcessadorPar extends Processador {
    public sabeProcessar(mensagem: Mensagem): boolean {
        return mensagem.codigo % 2 == 0; 
    };    
    public processar(mensagem: Mensagem): void {
        console.log("Processado par: " + 
            mensagem.codigo + ' - ' + mensagem.conteudo);
    };c
};

export class ProcessadorImpar extends Processador {
    public sabeProcessar(mensagem: Mensagem): boolean {
        return mensagem.codigo % 2 !== 0; 
    };
    public processar(mensagem: Mensagem): void {
        console.log("Processador impar: " +
            mensagem.codigo + ' - ' + mensagem.conteudo);
    };
};