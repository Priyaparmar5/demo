//Prime or not
const number = 100

for (let i = 0; i <= number; i++) {
    let flag = 0;
    let j;
    
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log("prime numbers are:"+i);
    }
    
}