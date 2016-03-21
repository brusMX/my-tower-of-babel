var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
    let commaSep = val.split(',');
    commaSep.forEach(val => {
    if(val !== '') args.push(+val);
    });
});
var i=1;
// write a function called `avg` here that calculates the average.
var sum = function(...args){
    return args.reduce( (sum, n) => sum + n );
};
    
var avg = function(...args){
    return sum(...args) / args.length;
}
console.log(avg(...args));