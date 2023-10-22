/*
插入排序
核心思想：当前元素找到前面序列中的正确位置

前面序列一定有序
正确的位置：保证前面的数都小于当前数，如何实现
位置排序是从后往前

我们需要做的：存储每一次需要排序的值
为什么需要存储？因为在排序过程中，每次都需要调用当前数前面序列的位置，因此当前数容易丢失
*/

function insertSort(arr) {
    const len = arr.length
    let temp
    for(let i = 1;i<len;i++) {
        let j = i
        temp = arr[i]

        while(j>0 && arr[j-1]>temp) {
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    
    return arr
}

