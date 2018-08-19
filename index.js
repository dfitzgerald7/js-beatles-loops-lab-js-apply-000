// add solution here
function theBeatlesPlay(musArray, insArray ){
  var myArray = [];
  var i;
  for (i=0; i < musArray; i++){
    var musician = musArray[i];
    var instrument = insArray[i];
    var myString = musician + " plays " + instrument;
    myArray[i] = myString;
  }
  return myArray;
}

function johnLennonFacts(facts){
  var i = 0;
  var myArray = [];
  while (i < facts.length){
    var newFact = facts[i] + "!!!";
    myArray[i] = newFact;
    i++;
  }
  return myArray;
}

