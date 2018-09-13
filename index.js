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
    return "I can't hear you!"
  }
}
