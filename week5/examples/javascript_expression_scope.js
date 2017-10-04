for (var i=0; i<10; i++) {
  console.log( i );
}

console.log(i);


function letTest() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x); 
  }
  if (true) {
     let x = 5;
     console.log(x);
  }
  console.log(x);
}

letTest();