// list should be sorted
function binarySearch<T>(list:T[],item:T):number{
    let left = 0;
    let right = list.length - 1;
    while(left<=right){
        let mid = Math.floor((right + left) / 2);
        if(list[mid]===item) return mid;
        else if(item<list[mid]) right = mid-1;
        else if(item>list[mid]) left = mid+1;
    }
    return -1;
}

export default binarySearch;