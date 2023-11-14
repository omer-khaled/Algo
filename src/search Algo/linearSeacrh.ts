function linearSearch<T>(list:T[],item:T):number {
    let index = -1;
    for(let i=0;i<list.length;i++){
        if(item===list[i]){
            index = i;
            break;
        }
    }
    return index;
}

export default linearSearch;