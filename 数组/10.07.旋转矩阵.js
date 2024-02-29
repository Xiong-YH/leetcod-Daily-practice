/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length
    const matrix_new = new Array(len).fill(0).map(()=>new Array(len).fill(0))
    for(let i = 0;i<len;i++) {
        for(let j = 0;j<len;j++) {
            matrix_new[j][len-i-1] = matrix[i][j]
        }
    }

    for(let i = 0;i<len;i++) {
        for(let j = 0;j<len;j++) {
            matrix[i][j] = matrix_new[i][j]
        }
    }
};


//第一行x都是倒数第一列x行
//用另一个矩阵去存储旧矩阵变换后的值
//之后替换