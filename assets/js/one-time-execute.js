export default (fcn) => {
  let hasExecuted = false;

  return function() {
    if (hasExecuted) { return }
    hasExecuted = true;
    return fcn()
  }
}
