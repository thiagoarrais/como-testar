require('rxjs/add/operator/partition')

function rotear(obsInput) {
  return obsInput.partition((msg) => msg.codigo % 2 !== 0);
}

module.exports = rotear;
