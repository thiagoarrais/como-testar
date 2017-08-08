const assert = require('assert');
const rxify = require('rxify');

const rotear = require('./index');

describe('roteamento', () => {
  it('separa o observable em dois', () => {
    const a = '{"codigo":1,"conteudo":"opa"}'
        , b = '{"codigo":2,"conteudo":"que"}'
        , c = '{"codigo":3,"conteudo":"beleza"}';

    const entrada = rxify.of(`${a}...${b}..${c}....`);

    const saida = rotear(entrada);

    const impar = saida[0];
    const par = saida[1];

    assert.equal(`${a}......${c}....`, impar.toString())
    assert.equal(`....${b}.......`, par.toString())
  })
})
