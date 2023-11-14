function quickSort<T>(list:T[]):T[]{
    if(list.length<2) return list;

    const pivot:T = list[list.length - 1];
    const leftArr:T[] = [];
    const rightArr:T[] = [];
    for(let i =0;i<list.length;i++){
        if(list[i]<pivot) leftArr.push(list[i]);
        else if(list[i]>pivot) rightArr.push(list[i]);
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
}

export default quickSort;

/*
    [99,2,5,6,78,33]
    [2,5,6] 33 ([99,78]=>[78,99])
    [2,5] 6 [] 33 ([] 78 [99]) => [78,99]
    [2] 5 []
    [2,5,6,33,78,99]
*/
