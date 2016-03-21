var inputs = process.argv.slice(2);

var mapper = (elem) => elem[0]
var reducer = (prev, curr) => prev += curr

var result = inputs
    .map(mapper)
    .reduce(reducer, "");
console.log(result);