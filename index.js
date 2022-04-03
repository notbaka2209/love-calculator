var name1 = document.querySelector("#name1_text");
var name2 = document.querySelector("#name2_text");
var button = document.querySelector("button");
var text = document.querySelector(".calculated_text");



button.addEventListener("click", function() {
    var name1Value = name1.value;
    var  name2Value = name2.value;

    if (name1.value === "divyansh" && name2.value === "sanvi") {
        text.innerHTML = "Your love percentage is "+ "100% "+name1Value + " and "+ name2Value + " are so in love with each other.You'll always stay by eachother's side or in simple words we can say is DIVYANSH AND SANVI ARE SOLEMATES!";
    }else if(name1.value === "sanvi" && name2.value === "divyansh"){
        text.innerHTML = "Your love percentage is "+ "100% Divyansh and  Sanvi are so in love with each other.You'll always stay by eachother's side or in simple words we can say is DIVYANSH AND SANVI ARE SOLEMATES!";
    }else if (name1.value != "divyansh" && name2.value != "sanvi") {
        var randomNo = Math.floor((Math.random()*100)+1);
        if (randomNo<20 ) {
            text.innerHTML = "Your love percentage is "+ randomNo+ "%.There is no hope.Just move on :("
        }else if (randomNo>= 20 && randomNo <= 50) {
            text.innerHTML = "Your love percentage is "+ randomNo + "%"+  name1Value + " and "+ name2Value + " Your love is comparable to rush hour traffic. Slow and frustrating but try it and see. It might work"
        }else if (randomNo >50 && randomNo <=80) {
            text.innerHTML = "Your love percentage is "+ randomNo + "% "+ name1Value + " and "+ name2Value + " has a reasonable chance of working out.So you guys should really go for it";
        }else {
            text.innerHTML = "Your love percentage is "+ randomNo + "% "+ name1Value + " and "+ name2Value + " You guys are make for each other"
    }
}
});