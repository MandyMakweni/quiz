
var userInput = new Array();
var answers = new Array(5);
answers[0] = "A";
answers[1] = "C";
answers[2] = "C";
answers[3] = "A";
answers[4] = "D";


function getScore(){
var score=0;
var numQuestions= 5;

for (var i=0;i<numQuestions;i++){
if (userInput[i]==answers[i]){
score += 1;
}
else{
score += 0;
}

}
return score;
}
function returnScore(){
alert("Your score is "+getScore()+"/5");
}

var answers = ["A","C","C","A","D"],
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot);
}

//answers results

//reset button
