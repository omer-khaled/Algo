function mergeSort<T>(list:T[]):T[]{
    if(list.length===1) return list;

    const left = 0;
    const right = list.length - 1;
    const mid = Math.floor((right + left) / 2) + 1;

    return merge(mergeSort(list.slice(0,mid)),mergeSort(list.slice(mid)));
}

function merge<T>(list1:T[],list2:T[]):T[]{
    const list:T[] = [];
    let i:number = 0;
    let j:number = 0;

    while(i<list1.length&&j<list2.length){
        if(list1[i]<list2[j]){
            list.push(list1[i]);
            i++;
        }
        else{
            list.push(list2[j]);
            j++;
        } 
    }
    while(i<list1.length){
        list.push(list1[i]);
        i++;
    }
    while(j<list2.length){
        list.push(list2[j]);
        j++;
    }

    return list;
}

export default mergeSort;

/*
    left = 0
    right = 5
    mid = 2
    [99,2,5,6,78,33]
    [99,2]  [5,6,78,33]          
    left = 0;
    right = 1
    mid = 1 [99] [2]










*/