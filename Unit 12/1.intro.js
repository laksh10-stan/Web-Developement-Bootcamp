var ar1 =["s1","s2","s3"];
console.log(ar1);
console.log(ar1[0]);
console.log(ar1[0][1]);
ar1[4]=90;

//Arrays
//
// Heterogeneous
// Dynamic allocation


//Definition
var aq =[];
var aq1 = new Array();
aq.length();

//Array Built in methods
// 1.push/Pop
// 2.shift/unshift
// 3.indexOf
// 4.slice

// 1.push;
var ar =new Array();
undefined
ar.push();
//0
console.log(ar);
// []
undefined
ar.push(12);
//1
ar.push(11,22);
//3
ar.push(11, "ad");
//5
ar.pop();
//"ad"
ar.pop();
//11
ar.pop();
//22
ar.pop();
//11
ar.pop();
//12
ar.pop();
//undefined
ar.push(11,22);
//2
ar.push(11, "ad");
//4
ar.pop(11);
//"ad"



// 2.shift/unshift
//like push and pop except they occur at the begining
//unshift --> push at the beg
//shift --> pop from the beg

//3.indexOf
var nums = [1,2,34,56,2,5];
nums.indexOf(2); //1 and not 4
nums.indexOf(9678); //-1 not found

//4.slice
var letters = ["a", "b", "c","d","e","f"];
var subset= letters.slice(1,3);  //stores "b", "c"
var complete = letter.slice();  //copies


var mat = [["asf",23,'24'],["asf3","2wrfd"]];
console.log(mat[0][0][1]); //works