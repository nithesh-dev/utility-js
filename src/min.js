const min = (list) => {
    if(list.length === 0)
    {
        return [];
    }
    var currMin = Number.MAX_VALUE;
    list.forEach(element => {
        currMin = Math.min(element, currMin);
    });
    return currMin;
}

module.exports = min;