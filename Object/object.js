// var john = {
//     name : 'john cena',
//     birthOfYear: 1997,
//     job: 'teacher'
// };
// var Person= function(name, birthOfYear, job) {
//             this.name=name;
//             this.birthOfYear=birthOfYear;
//             this.job=job;
//         }
//         Person.prototype.calAge = function() {
//           return (2020-this.birthOfYear);
//         };
 
// var san=new Person('Sandeep', 1998, 'teacher');

// console.log(raj.calAge());

// console.log(john.lastName);

// console.log(john)

// var year = [1997,1991,1989,1998,2005];

// function arrayCal(arr, fn) {
//   var areRes=[];
//   for(var i=0;i<arr.length;i++)
//   {
//     areRes.push(fn(arr[i]));
//   }
//   return areRes;
// }
//  function caclAge(el) {
//    return 2020-el;
//  }
//  var ages =arrayCal(year, caclAge);
//  console.log(ages);






//IIFE
// (function() {
// var score= Math.floor(Math.random()*10);
//   console.log(score>=5);
  
// })();



// function retirement(retirementAge) {
//   var a=' years left until retirement';
//   return function(yearOfBirth) {
//     var age= 2020-yearOfBirth;
//     console.log((retirementAge-age)+a)
//   }
// }

// var retirementIndia=retirement(70);
// retirementIndia(1997);
// var retirementUs = retirement(66);
// retirementUs(1987);
// retirement(65)(2000);

// function interviewQue(job) {
//   return function(name) {
//     if(job==='teacher') {
//       console.log('which subject do you teach '+name+'?');
//     }
//     else if(job==='designer') {
//       console.log('hello, '+name+' have you done some work in ux ?');
//     }
//     else {
//       console.log('tell me about your self '+name);
//     }
//   }
// }
// //interviewQeu('teacher')('Abhishekk');
// interviewQue('teacher')('pooja');
// interviewQue('another')('sonu');
// interviewQue('designer')('samiksha')


 var abhi= {
   name: 'abhishek',
   age: 23,
   job: 'electrician',
   presentation: function(style, timOfDay) { 
     if(style==='formal') {
     console.log('hey, Good '+timOfDay+' i\'m '+this.name+', my age is '+this.age+' and i\'m a '+this.job+' thank you!');
   } else {
     console.log('hey what\'s guyssss!, Good '+timOfDay+' i\'m a '+this.age+' old. and i\'m a '+this.job+' thanku guyss!');
   }
   }
 };
 var san= {
   name:'sandeep',
   age:21,
   job:'teacher'
 }
 abhi.presentation('frinly', 'morning');
 abhi.presentation.call(san,'formal', 'afternoon');
 


 var year = [1997,1991,1989,1998,2005];

function arrayCal(arr, fn) {
  var areRes=[];
  for(var i=0;i<arr.length;i++)
  {
    areRes.push(fn(arr[i]));
  }
  return areRes;
}
 function caclAge(el) {
   return 2020-el;
 }
 function isAge(limit, el) {
   return el>=limit;
 }
 var ages =arrayCal(year, caclAge);
 var fullIndia=arrayCal(ages, isAge.bind(this, 24))
 console.log(ages);
 console.log(fullIndia);
