let str = "testing testing one two three ok";

console.log(str);

for (let i = 0; i < str.length ; i++){
    if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
            console.log(str.charAt(i));
            break;
    }
}
 

