var eventType, whatTowear, temp, degrees, result;
    
function push() {
    eventType = prompt("Is Your Event Casual, Semi-Formal, Or Formal?");
    if (eventType==="Casual"||eventType==="casual") {whatTowear = "Comfy Outfit"}
    else if (eventType==="Semi-Formal"||eventType==="semi-formal"||eventType==="semi formal"||eventType==="Semi Formal") {whatTowear = "A Polo"}
    else if (eventType==="Formal"||eventType==="formal") {whatTowear = "A Suit"}
      
    temp = prompt("What's the tempurature? Cold (<54°), Ok (54°-70°), or Warm (>71°)");
    if (temp==="Cold"||temp==="cold") {degrees = "A Coat"}
    else if (temp==="OK"||temp==="Ok"||temp==="ok") {degrees = "A Jacket"}
    else if (temp==="Warm"||temp==="warm") {degrees = "No Jacket"}
    
    result = "Because Your Event Is A "+eventType+" Event And The Temperature Is "+temp+" You Should Wear "+degrees+" And A "+whatTowear+", Have A Great Time!";
    
    console.log(result)
    document.getElementById("resultsAndAnswers").innerHTML = result;
    document.getElementById("resultsAndAnswers").style.padding = "20px 20px 20px 20px";}

