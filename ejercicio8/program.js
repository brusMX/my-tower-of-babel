const max = process.argv[2];
let FizzBuzz = {
    [Symbol.iterator]() {
        let cur = 0;
        return {
            next() {
                cur = cur + 1;
                var res = cur;
                if (cur % 3==0){
                    res = "Fizz";
                } 
                if( cur % 5 ==0){
                    res =  "Buzz";
                }
                if(cur % 3==0 && cur % 5==0){
                    res = "FizzBuzz";
                }
                


                if (cur <= max)  return { done: false, value:  res};
                return { done: true , value: null };
            }
        }

    }
}


for (var n of FizzBuzz) {
    console.log(n);
}
