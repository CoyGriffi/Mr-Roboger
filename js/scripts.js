//back-end logic
function robotOutput(number) {
  let counter = []
  for (let index = 0; index <= number; index += 1) {
    let roboTalk = index.toString();
    if (roboTalk.includes(3)) {
      counter.push ("Won't you be my neighbor?");
    } else if (roboTalk.includes(2)) {
      counter.push ("Beep");
    } else if (roboTalk.includes(1)) {
      counter.push ("Boop");
    } else if (roboTalk.includes(42)) {
      counter.push ("ERROR ERROR ERROR PLEASE CONTACT ADMIN");
    } else {
      counter.push(roboTalk);
    }
  }
  return counter;
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