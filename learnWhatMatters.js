// Higher order function
        // a fucntion who takes a function in a paramerter for return a function or BOth 
        // example  ForEach loop 
        // Callback function, passed as a parameter in the higher order function
        // functionis return for another function as Closures
        // 
        // function callbackFunction(){
        //     console.log('I am  a callback function');
        // }
        
        // // higher order function
        // function higherOrderFunction(func){
        //     console.log('I am higher order function')
        //     func()
        // }
        
        // higherOrderFunction(callbackFunction);

// Constructor *******************
        
// esha function jisme this ka aur call karte wakt new ka use ho 
    // function sanchaofBiskit(){
    //     this.width=12;
    //     this.height=12;
    //     this.coloe="Brown";
    //     this.taste="Sugary "
    // }

    // let bskit1=new sanchaofBiskit();
    // console.log(bskit1);

    // let bskit2=new sanchaofBiskit();
    // bskit2.price=5;
    // console.log(bskit2);
    // console.log(bskit1);

// **********  First Class Function

// function person(){
//    this.firstName="Parth";
//     this.lastName="Yadav";
// }
// console.log(typeof person);



//*********************  ***   iife   */
    // immediately invoked function expression 
    // function ko turant chalane ki kala,  is tareeke se ki hum log koi private variable bana paaye
    // used to make private variable
    // yahi pe return karega  bhai

            //   var ans= (function(){
            //         var privateval=12;  // this is not accessbile in  browser


            //         return {
            //             getter:function(){
            //                 console.log(privateval);
            //             },setter:function(val){
            //                 privateval=val;
            //             }
            //         }

            //         // return {}  it is a blank object
            //     })()

                  // var ans=(function(){})();

            //     // console.log(a)  a is not defined
            // console.log(ans.getter);
            // ans.setter(20);
            // console.log(ans.getter());
            
 //  **************** Prototype Inheritance
 
//  var Human={
//     name:"Harsh",
//     canFly:false,
//     canTalk:true,
//     willDie:true,

//  }

//  var SheriyansStudent={
//     solveJavascriptQuestion:true,
//     createMordenWebsite:true,
//  };

//  SheriyansStudent.__proto__=Human;    // prototype Inheritance

// console.log(SheriyansStudent.name);

// console.log(this);  // window object
// function abcd(){
//    console.log(this)  // window object
// }

// var obj={
//    baatKaro:function(){
//       console.log(this);    // represent object 
//    }
// }

      // in any object , "this"  keyword always refers to parent object
//   var button = document.querySelector("button"); 
//   button.addEventListener("click", function(){ 
//    console.log(this)  // here this repesent  button 
//   });

   
//  **********************  call apply bind  

   // function abcd(){
   //    console.log(this);
   // }
   //    var obj={age:23};
   // abcd();  // this is refer to window 
   // abcd.call(obj);  // this will refer to obj

   // function abcd(val1,val2){
   //    console.log(this);
   //    console.log(val1+val2)
   // }
   //    var obj={age:23};
   // abcd();  // this is refer to window 
   // abcd.call(obj,2,1);  // this will refer to obj
   // abcd.apply(obj, [1,2,3]); //  apply tell us use only two parameter so we pass second in array 

   // var newfun=abcd.bind(obj,3,2);
   // newfun();

// ********************* async Js


      //    console.log("Hello");
      //   let ans=setTimeout(()=>{
      //       console.log("Parth Yadav");
      //    },5000);
      //    console.log("My name is ");

//  *****************  Promise 

   // var ans=new Promise((res,rej)=>{
   //    // yaha par vo code aayega jo result dega 
   //    var x=Math.floor(Math.random()*10);

   //    if(x<5){
   //       return res;
   //    }else{
   //       return rej;
   //    }
   // });

   // ans.then( function(){
   //    console.log("below 5");
   // })
   // .catch(function(){
   //    console.log("above 5");
   // })