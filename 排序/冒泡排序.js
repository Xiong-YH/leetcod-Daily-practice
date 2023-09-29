/*
1.什么是冒泡排序
    从第一个元素开始，每次都比对相邻的两项，若第一项比第二项大，则交换两者的位置，反之不动
    每一轮操作都会将本轮最大的元素放在末尾，假设数组长度为n，重复完n轮就有序了
*/

//基础解法
function bubbleSort(arr) {
    const n = arr.length

    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n-1 ; j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr

}

//改进版
//走完第n轮循环时，数组后面就已经n个有序了，可以没必要处理已有序的元素
function bubbleSort(arr) {
    const n = arr.length

    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n-1-i ; j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

//最好情况版
//若没有进行交换，只需要遍历一轮就行了，时间复杂度为O(n)
function bubbleSort(arr) {
    const n = arr.length
    let flag = false
    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n-1-i ; j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                flag = true
            }
        }
        if(flag) return arr
    }
    return arr
}

//冒泡排序平均时间复杂度为O(n^2),最好情况下为O(n)