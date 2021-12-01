  const transpose = function(matrix) {
    let muse = [];
    for (let col = 0; col < matrix[0].length; col++) {
      muse.push(matrix.map(x => x[col]))
      // console.log(muse)
    }
    main = muse;
  
    return main;
  };
  
  
  // Do not edit this function.
  const printMatrix = (matrix) => {
      for (const row of matrix) {
          for (const el of row) {
              process.stdout.write(el + " ");
          }
          process.stdout.write('\n')
      }
  }
  
  printMatrix(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2],
    [3, 4],
    [5, 6]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2, 3, 4, 5, 6, 7]
  ]));