/*
多维数组
[1, [2, [3, [4, 5]]], 6] -> [1, 2, 3, 4, 5, 6]
*/


function flatten(list) {
    let res = []
    let fn = function(target,arr) {
        for(let i = 0; i<list.length; i++) {
            if(Array.isArray(arr[i])) {
                fn(target,arr[i])
            } else {
                res.push(arr[i])
            }
        }
    }
    fn(res,list)
    return res
}

let flatten = (nestedList) =>  {
    nestedList.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur): cur), [])
}



/*
思路：因为是数组，我们可以考虑使用for遍历
    用新数组来存
    每一次遍历时，检测索引值是否为数组，若为数组，则先进行遍历，将数组内的数字拍入新数组中
    若不为数组，则直接推入新数组
    最终得到的就是一维数组
*/