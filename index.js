//Your code here

function justInvoke(callback) {
  return callback();
}

function setThisWithCall (callback, name, age) {
  return callback.call(name, age);
}

function setThisWithApply (callback, name, [age, hairColor]) {
  return callback.apply(name, [age, hairColor]);
}

function returnNewFunctionOf (fn, name) {
  let newFunction = fn.bind(name);
  return newFunction;
}
