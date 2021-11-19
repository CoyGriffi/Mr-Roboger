//back-end logic
function robotOutput(number) {
  let counter = []
  for (let index = 0; index <= number; index +=1) {
    let roboTalk = index.toString();
    if (counter.includes(3)) {
      return "Won't you be my neighbor?";
    } else if (counter.includes(2)) {
      return "Beep";
    } else if (counter.includes(1)) {
      return "Boop";
    } else if (counter.includes(42)) {
      return "ERROR ERROR ERROR PLEASE CONTACT ADMIN";
    } else {
      return counter
    }
  }
}