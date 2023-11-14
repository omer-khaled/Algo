function quickSort(list) {
    if (list.length < 2)
        return list;
    const pivot = list[list.length - 1];
    const leftArr = [];
    const rightArr = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < pivot)
            leftArr.push(list[i]);
        else if (list[i] > pivot)
            rightArr.push(list[i]);
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
export default quickSort;
