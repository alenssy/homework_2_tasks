//declaratively
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num).concat("...") : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//imperatively
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num).concat("...");
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);