// ## BABY STEPS (Exercise 2 of 13)  
let ans = 0;
for (i = 2; i < process.argv.length; i++) {
  ans += Number(process.argv[i]);
}

console.log(ans);