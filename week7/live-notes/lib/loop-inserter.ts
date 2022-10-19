// Taken from https://github.com/toolness/slowmo-js.

function defaultInserter(name) {
  return function(node) {
    return name + "();"
  }
}

export default function LoopInserter(fn) {
  if (typeof(fn) == "string")
    fn = defaultInserter(fn);

  return function(node) {
    if (node.type == 'WhileStatement' ||
        node.type == 'ForStatement' ||
        node.type == 'DoWhileStatement') {
      node.body.update('{ ' + fn(node) + node.body.source() + ' }');
      return true;
    }
    return false;
  };
};
