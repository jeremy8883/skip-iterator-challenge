const createIterator = (maxCount) => {
  const next = () => {
    return 0; // TODO
  };

  const hasNext = () => {
    return false; // TODO
  };

  return {
    next,
    hasNext,
  };
};

module.exports = {
  createIterator,
};
