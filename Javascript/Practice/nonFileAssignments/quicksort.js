const quickSort = (arr) => {
    if (arr.length === 1) {
        return arr
    }

    const pivot = arr[arr.length-1]
    const leftArr = []
    const rightArr = []

    for(const el of arr.slice(0, arr.length-1)) {
        el < pivot ? leftArr.push(el) : rightArr.push(el)
    }
    if(leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if( leftArr.length > 0 ){
        return [...quickSort(leftArr), pivot]
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

console.log(quickSort([10, 23, 12, 1, 2, 3, 4, 5, 27]))
