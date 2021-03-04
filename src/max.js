const max = (list) => {

    if(list.length === 0)
    {
        return [];
    }

    var currMax = Number.MIN_VALUE;
    list.forEach(element => {
        currMax = Math.max(element, currMax);
    });
    return currMax;
}

module.exports = max;