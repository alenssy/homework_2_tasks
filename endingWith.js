//declaratively
function confirmEnding(str, target) {
  return str.substr(-target.length) === target
}

confirmEnding("Bastian", "n");

//imperatively
function confirmEnding(str, target) {
  let subTarget = str.substr(-target.length)
  if (subTarget === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");