function addUnit(item, unit) {
  if (angular.isString(item)) {
    return item
  }
  return item + unit
}

module.exports = addUnit;
