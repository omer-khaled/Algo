/*
    انا كل لفه اجيب اقل عنصر و احطه فى مكانه الصحيح اللى عليه الدور
*/
function selectionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let min = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[min] > list[j]) {
                min = j;
            }
        }
        [list[min], list[i]] = [list[i], list[min]];
    }
    return list;
}
export default selectionSort;
