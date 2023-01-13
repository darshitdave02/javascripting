function prime (num) {
    let isPrime = true

    if (num === 1) {
        console.log("1 is neither prime nor composite number.")
    }
    
    else if (num > 1) {
    
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false
                break
            }
        }
    
        if (isPrime) {
            console.log(`${num} is a prime number`)
        } else {
            console.log(`${num} is a not prime number`)
        }
    }
    
    else {
        console.log(`${num} is not a prime number.`)
    }
}


function armstrong(num) {
    let n = num;
    let number = 0;

    while(n>0)
    {
        let r = n%10;
        number += Math.pow(n,3);
        n/=10;

    }

    if(number==num)
    {
        console.log(`${num} is a Armstrong number.`);
    }
    else
    {
        console.log(`${num} is not a Armstrong number`);
    }




}