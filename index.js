function shout (string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  var capped = string.toUpperCase();
  console.log(capped);
}

function logWhisper(string) {
  var lowered = string.toLowerCase();
  console.log(lowered);
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    console.log("I can't hear you!");
  }
}

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    console.log("YES INDEED!");
  }
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
