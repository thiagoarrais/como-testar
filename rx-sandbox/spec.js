const expect = require('chai').expect;
const rxSandbox = require('rx-sandbox').rxSandbox;

const rotear = require('./index');

describe('roteamento', () => {
  it('separa o observable em dois', () => {
    const msgs = {
      a: {"codigo":1, "conteudo":"opa"},
      b: {"codigo":2, "conteudo":"que"},
      c: {"codigo":3, "conteudo":"beleza"}
    };

    const { hot, cold, flush, getMessages, e, s } = rxSandbox.create();

    const entrada = cold('   ----a--b-----c---|', msgs);

    const [impar, par] = rotear(entrada).map(getMessages);

    flush();

    expect(e('----a--------c---|', msgs)).to.deep.equal(impar);
    expect(e('-------b---------|', msgs)).to.deep.equal(par);
  })
})
