var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}



destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshft(element)
  return array
}
