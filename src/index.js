const { createIterator } = require("./iterator");

const iterator = createIterator(20);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
