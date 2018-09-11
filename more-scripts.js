 //FOR LOOP
// define 'i' inside for loop
var myList = ['1', '2', '3', '4', '5', '44'];
// 1) i=0 index starts at 0 first index of an array is 0
// condtion 2nd thing passed (i<myList.length)
for( let i=0; i < myList.length; i++)
  console.log('for loop:', myList[i]);// index of every point in loop
/* 2) i<total.legth of list keep going statement
that keeps the loop running i less than total length of list .length object property
loop will keep running as long as 'i' is less than length of array */
/* 3) i++ to increase 'i' by 1 every time the loop runs */
// for loop alternative but cleaner
for (let i = 0; i < myList[i]; i++) { // it keeps looping till it comes back undefined
  console.log('for loop alt:', myList[i]);
}
//WHILE LOOP
// define in 'i' outside while loop
let i = 0;
// while loop
// in while loop condition is only thing passed (i<myList.length)
while ( i < myList.length) {
  console.log('while loop:', myList[i]);
  i++ // must put in or the loop will continue to run
}
//end loop

//while loop alternative but cleaner
while (myList[i]) {
  console.log('while loop alt:', myList[i]);
  i++;
}
