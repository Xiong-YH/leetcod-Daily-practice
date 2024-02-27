/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const res = []
    if(matrix.length === 0) return []

    let top = 0,left = 0,right = matrix[0].length - 1,bottom = matrix.length - 1

    while(top < bottom && left < right) {
        for(let i = left;i < right;i++) res.push(matrix[top][i])
        for(let i = top;i < bottom;i++) res.push(matrix[i][right])
        for(let i = right;i > left;i--) res.push(matrix[bottom][i])
        for(let i = bottom;i > left;i--) res.push(matrix[i][left])

        top++
        right--
        bottom--
        left++

    }

    if(top === bottom) {
        for(let i = left;i<= right;i++) res.push(matrix[top][i])
    }else if(left === right) {
        for(let i = top;i <= bottom;i++) res.push(matrix[i][right])
    }


    return res
};

//矩阵，拿到合适的边界条件，
//top、bottom都是行边界
//left、right是列边界
//[i][j] i为行，j为列

//每一次遍历从上一轮的边界条件开始，