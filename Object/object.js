/*
var john = {
    name : 'john cena',
    birthOfYear: 1997,
    job: 'teacher'
};
var Person= function(name, birthOfYear, job) {
            this.name=name;
            this.birthOfYear=birthOfYear;
            this.job=job;
        }
        Person.prototype.calAge = function() {
          return (2020-this.birthOfYear);
        };
 
var san=new Person('Sandeep', 1998, 'teacher');

console.log(raj.calAge());

console.log(john.lastName);

console.log(john)

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
 var ages =arrayCal(year, caclAge);
 console.log(ages);






IIFE
(function() {
var score= Math.floor(Math.random()*10);
  console.log(score>=5);
  
})();



function retirement(retirementAge) {
  var a=' years left until retirement';
  return function(yearOfBirth) {
    var age= 2020-yearOfBirth;
    console.log((retirementAge-age)+a)
  }
}

var retirementIndia=retirement(70);
retirementIndia(1997);
var retirementUs = retirement(66);
retirementUs(1987);
retirement(65)(2000);

function interviewQue(job) {
  return function(name) {
    if(job==='teacher') {
      console.log('which subject do you teach '+name+'?');
    }
    else if(job==='designer') {
      console.log('hello, '+name+' have you done some work in ux ?');
    }
    else {
      console.log('tell me about your self '+name);
    }
  }
}
//interviewQeu('teacher')('Abhishekk');
interviewQue('teacher')('pooja');
interviewQue('another')('sonu');
interviewQue('designer')('samiksha')
*/  
/*
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
 
--------------------------------------------------------------------------------------------------

chapter new ES6--- 

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

//  let i=23;
//  console.log(i);
var abhishek=(function(){
  console.log('hiii meri jaan');
})();

var banti=(function(age, name) {
 return 2020-age;
})(abhishek);
*/

/*
let firstName='Banti';
let lastName='Prajapati';
const yearOfBirth=1997;
var calAge=function(yearOfBirth) {
  return 2020-yearOfBirth;
}
const n= `${firstName} ${lastName}`;
console.log(n.startsWith('B'));
console.log(n.endsWith('i'));
console.log(n.includes('a'));
*/

//Arrow Function 

/*const year=[1998,1992,1990,2000];

let ages=year.map((el, index)=> {
  const now=new Date().getFullYear();
  age=now-el;
  return `age is ${index+1}: ${age}.`;
});
console.log(ages);*/

// const box = {
//   color: 'green',
//   position:1,
//   clickMe :()=> {
//     document.querySelector('.green').addEventListener('click', ()=> {
//      var str=`this is a ${this.color} and postion is ${this.position}`;
//      alert(str);
//     });
//   }
// }
// box.clickMe();
/*const obj = {
  firstName:'Sandeep',
  lastName :'pal'
};
const {firstName, lastName}=obj;
console.log(firstName);
console.log(lastName);
*/


// const boxes=document.querySelectorAll('.box');

// Array.from(boxes).forEach(cur=> cur.style.backgroundColor='dodgerblue');

/*
const ages=[17,12,21,65,23,20];

var full= ages.map(cur=> cur>=18)

console.log(full);
console.log(full.indexOf(true));

console.log(ages.find(cur=> cur>=18))
console.log(ages.findIndex(cur=> cur>=18))


//speard operator//

const mamaFamily=['sandeep', 'aman', 'vishal'];
const myFamily=['rajkumar', 'banti','neha'];

const complateFamily=[...mamaFamily,'mama', 'papa',...myFamily];
console.log(complateFamily);

const h= document.querySelector('h1')
const box=document.querySelectorAll('.box');
const all= [h,...box];
Array.from(all).forEach(cur=>cur.style.color='purple');


//Rest opertaor//
function isAgeFull(...years) {
  years.forEach(cur=> console.log((2020-cur)>=18))
}
// isAgeFull(1887, 2009, 1911);

function isAge(limit,...years) {
  years.forEach(cur=> console.log((2020-cur)>=limit));
}

isAge(21, 1998,2000,1995,2001)


//Default perameter//
function PrajapatiPerson(firstName, yearOfBirth, lastName='Prajapati',  nationality='indian') {
  this.firstName=firstName;
  this.lastName=lastName;
  this.yearOfBirth=yearOfBirth;
  this.nationality=nationality;
}
var Raj=new PrajapatiPerson('Rajkumar', 1996);
console.log(Raj);

var Mohit=new PrajapatiPerson('Mohit', 1997, 'dubey');
console.log(Mohit); 



   // MAP //

  const question=new Map();
  question.set('question', 'which is the latest version of the javaScript now?');
  question.set(1,'ES5');
  question.set(2, 'ES6');
  question.set(3, 'ES2015');
  question.set(4, 'ES7');
  question.set('correct', 3);
  question.set(true, 'correct answer');
  question.set(false, 'Wrong!, please try agian');
   console.log(question.get('question'));
  // console.log(question.get(2));
  // console.log(question.size);
  // question.delete(4);
  // console.log(question);
  // question.clear();
  if(question.has(4)) {
   console.log('4 ans is here')
  }

  // question.forEach((value, key)=> {
  //   console.log(`this is a ${key}, and it's set is ${value}.`);
  // })

  //for of mwthods//
 for(let [key, value] of question.entries()) {
  if(typeof(key)==='number') {
    console.log(`Answer ${key}: ${value}.`);
 }
}

const ans=parseInt(prompt('write the correct answer'));
console.log(question.get(ans===question.get('correct')));
*/


//Class and subclass

class person {
 constructor(name, yearOfBirth, job) {
   this.name=name;
   this.yearOfBirth=yearOfBirth;
   this.job=job;
 }
 calcAge() {
   var age=new Date().getFullYear()-this.yearOfBirth;
   console.log(age);
 }
}
class Athelete extends person {
  constructor(name, yearOfBirth, job, olampicGame, madels) {
    super(name, yearOfBirth, job)
    this.olampicGame=olampicGame;
    this.madels=madels;
  }
  wonMadels() {
    this.madels++;
    console.log(this.madels);
  }
}
const rajAthelete=new Athelete('Rajkumar', 1996, 'swimmer', 10, 2);
rajAthelete.wonMadels();
rajAthelete.calcAge();