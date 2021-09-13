//declaratively
function repeatStringNumTimes(str, num) {
  if(num === 1) return str;
  if(num <= 0) return "";
  else return str + repeatStringNumTimes(str, num - 1);
}

repeatStringNumTimes("abc", 3);

//imperatively
function repeatStringNumTimes(str, num) {
  let result = "";
  while (num > 0) {
    result += str;
    num--;
  }
  return result;
}

repeatStringNumTimes("abc", 3);