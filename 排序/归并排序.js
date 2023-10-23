function mergeSort(arr) {
    const len = arr.len

    if(len<=1) return arr
    const mid = Math.floor(len/2)

    const leftArr = mergeSort(arr.slice(0,mid))
    const rightArr = mergeSort(arr.slice(mid,len))

    const res = mergeArr(leftArr,rightArr)
    return res
}


function mergeArr(arr1,arr2) {

    let i = 0,j = 0

    const res = []

    const len1 = arr1.length
    const len2 = arr2.length

    while(i<len1 && j<len2) {
        if(arr1[i]<arr2[j]) {
            res.push(arr1[i])
            i++
        }else {
            res.push(arr2[j])
            j++
        }

        
    }

    if(i<len1) {
        res.concat(arr1.slice(i))
    }else {
        res.concat(arr2.slice(j))
    }

    return res

}