//back-end logic
function robotOutput(number) {
  let counter = []
  for (let index = 0; index <= number; index ++) {
    let roboTalk = counter.push(index);
    if (roboTalk.includes(3)) {
      counter.push ("Won't you be my neighbor?");
    } else if (roboTalk.includes(2)) {
      return "Beep";
    } else if (roboTalk.includes(1)) {
      return "Boop";
    } else if (roboTalk.includes(42)) {
      return "ERROR ERROR ERROR PLEASE CONTACT ADMIN";
    } else {
      return counter
    }
  }
}


//UI logic

$(document).ready(function() {
  $("form#numberInput").submit(function(event) {
    event.preventDefault();
    let number = ($("input#number").val());
    let results = robotOutput(number);
      $("#outputText").show();
      $("#outputNumber").text(results);

  });
});