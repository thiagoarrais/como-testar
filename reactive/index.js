function rotear(obsInput) {
  // nao consegui escrever obsInput.partition(...), entao vou
  // reimplementar aqui. nao facam isso em casa
  const predicate = (msg) => { return msg.codigo % 2 !== 0; };
  const not = (predicate) => { return (arg) => !predicate(arg); }
  return [
    obsInput.filter(predicate),
    obsInput.filter(not(predicate))
  ];
}

module.exports = rotear;
