function selectSort(arr) {
    const len = arr.length
    let minValue

    for(let i = 0;i<len;i++) {
        minValue = i

        for(let j = i; j<len; j++) {
            if(arr[j]<arr[minValue]) {
                minValue = j
            }
        }
        if(minValue != i) {
            [arr[i],arr[minValue]] = [arr[minValue],arr[i]]
        }
    }
    return arr
}