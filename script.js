// Гринчук Тарас
// Лабораторна робота № 7.2
// Варіант №4

function generateMatrix(rows, cols, min, max) {
   const matrix = [];
   for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
         matrix[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
      }
   }
   return matrix;
}

function printMatrix(matrix) {
   for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join("\t"));
   }
}

function getMaxOfArray(arrayRow) {
   let max = arrayRow[0];
   for (let i = 1; i < arrayRow.length; i++) {
      if (max < arrayRow[i]) {
         max = arrayRow[i];
      } 
   }
   return max;
}

function sumMaxElOfEvenRows(matrix) {
   let sum = 0;
   for (let i = 0; i < matrix.length; i += 2) {
      sum += getMaxOfArray(matrix[i]);
   }
   return sum;
}

const matrix = generateMatrix(6, 5, 1, 50);
printMatrix(matrix);
const sum = sumMaxElOfEvenRows(matrix);
console.log("Сума максимальних елементів по парних рядках: " + sum);
