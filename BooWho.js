//declaratively
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

//imperatively
function booWho(bool) {
  return bool === false || bool === true;
}

booWho(null);