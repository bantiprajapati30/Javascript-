(function(){
function Question(question, answer, correct) {
    this.question=question;
    this.answer=answer;
    this.correct=correct;
}

Question.prototype.questionDisplay = function() {
    console.log(this.question);

    for(var i=0; i<this.answer.length;i++) {
        console.log(i+': ' +this.answer[i]);
    }
}

Question.prototype.answerCheck=function(ans) {
    if(ans!==1&&ans!==0&&ans!==1&&ans!==2)
    {
       console.log('please give right input')
    } else if(ans===this.correct) {
        console.log('correct answer');
    } else {
        console.log('wrong answer try again dear!')
    }
}
    var q1=new Question('how many times lockdown extends? ', 
                        ['0 times', '1 times', '2 tines'], 0);

    var q2=new Question('who is cm of utterpradesh ? ',
                        ['jyotiraditya cindiya', 'bhupesh jain', 'aditya yogi'],
            2);
    var q3=new Question('today india has corona positive or not',
                        ['yes', 'no'], 0);

    var questions=[q1,q2,q3];
    var n= Math.floor(Math.random()*questions.length);

    questions[n].questionDisplay();

    var answer=parseInt(prompt('plaese select your correct answer'));

    questions[n].answerCheck(answer);
    })();