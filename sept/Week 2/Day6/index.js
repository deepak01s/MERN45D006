// let arr = ["apple", "sunday", "mango", "sky", "milk", "soap"];  
// for (let value of arr) {
//   if (value.charAt(0) == "s") {
//     console.log(value);  
//   }
// }


// let str="hello";
// let reversedStr=""
// for(let i=str.length-1;i>=0;i--){
//     reversedStr= reversedStr+str[i]
// }
// console.log(reversedStr); 

// let str1="depak"
// let count=0;
// for(let v of str1 ){
// if (v === include.(v)){
//         console.log(v);
//         count++;
//     }
    
// }

// let arr=["hii","bye","good","soumya"]

// for(let v of arr){
//     if(v.startsWith("s")){
//         console.log(v)
//     }
// }

// let str="Qlith"
// let reversedStr=""

// for(let i=str.length-1;i>=0;i--){
//     reversedStr=reversedStr+str[i]
// }

// console.log(reversedStr)

// let str1="Qlith"

// console.log(str1.split(""))
// console.log(str1.split("").reverse())
// console.log(str1.split("").reverse().join(""))

// let str2="alkdjfwle";
// let count=0;

// for(let v of str2){
//     if(v==="a" || v ==="e" || v==="i" || v==="o"|| v==="u"){
//         count++;
//     }
// }
// console.log(count)


// let vawelCount=0
// for(let v of str2){
//     if("aeiou".includes(v)){
//         vawelCount++
//     }
// }

// console.log("count",vawelCount)











//Task 1.
function isPalindrome(s) {
    let reversed=s.split("").reverse().join("");
    return s === reversed ? 1 : 0;
}
console.log(isPalindrome("abba"));
console.log(isPalindrome("abc"));

//Task 3.

const s="apple, banana,cherry";
const arr=s.split(","); 
console.log(arr);

//Task 4.
const s1 = "hello world, hello JavaScript!";
const count = {};
for (let ch of s1) {
  if (ch !== " " && ch !== ",") { 
    count[ch] = (count[ch] || 0) + 1;
  }
}
for (let key in count) {
  console.log(`${key} → ${count[key]} times`);
}

//task 2.
let arr1 = ["item 3", "item 2", "item 1", "item 7", "item 5"];
arr1.sort((a, b)=>{
  let p = parseInt(a.split(" ")[1]);
  let q = parseInt(b.split(" ")[1]);
  return p - q;
});
console.log(arr1); 




