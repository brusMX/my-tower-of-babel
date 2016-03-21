const max = parseInt(process.argv[2], 10);

let fibonacci = function*(){
    let pre = 0, cur = 1;
    while (pre < max) {
    // Here we destruct the former state
    [pre, cur] = [cur, cur+1];
    if(pre%3==0){ pre = "Fizz";}
    else if(pre%5==0){ pre = "Buzz";}
    else if(pre%3==0 && pre%5==0){ pre = "Buzz";}
    // and yield (return) each step
    yield pre;
    }
}();

for (var n of fibonacci) {
    console.log(n);
}
