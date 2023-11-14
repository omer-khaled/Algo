/*
      انا بلف على العناصر فى كل لفه انا هدفى انى امسك كل عنصر مع اللى بعده واقارنه بيه ولو كبير بعمل تبادل وبلف عليه لوب جوه لوب لان كل لفه بتستهدف انى اقعد الف عنصر فى حين هو لو اكبر واحد فبفضل الفه لحد ما اوصله لاخر المصفوفه
*/
function bubbleSort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        let swaped = false;
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                swaped = true;
                [list[j], list[j + 1]] = [list[j + 1], list[j]];
            }
        }
        if (!swaped)
            break;
    }
    return list;
}
export default bubbleSort;
