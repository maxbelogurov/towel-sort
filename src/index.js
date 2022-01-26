
module.exports = function towelSort (matrix) {
  let towel = [];
  for (key in matrix) {
    key % 2 === 0 || key === 1 ? towel = towel.concat(matrix[key]) : towel = towel.concat(matrix[key].reverse());
  }
  matrix = towel;
  return matrix;
}
