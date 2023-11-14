/*
    المفروض انا بقارن بين العنصر وبين المصفوفه اللى قبله المرتبه و اعمل تبادل واضعها فى مكانها الصحيح
*/

function insertionSort<T>(list:T[]):T[]{
    /*
        [99,2,5,6,78,33]
        loop one=> i=1 , j=0
            [2,99,5,6,78,33]
        loop one=> i=2 , j=1
            [2,99,99,6,78,33]
            [2,5,99,6,78,33]
    */
    for(let i = 1;i<list.length;i++){
        let insertionItem = list[i];
        for(var j = i-1;j>-1;j--){
            if(insertionItem > list[j]) break;
            list[j+1] = list[j];
        }
        list[j+1] = insertionItem;
    }
    return list;
}

export default insertionSort;