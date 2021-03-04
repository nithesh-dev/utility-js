const reduce = (list, reducer, secondValue) => {
    if(secondValue == null) {
        if(list.length === 0)
        {
            return undefined;
        }
        var result = list.reduce(reducer);
        return result;
    }
    else {
        var result = list.reduce(reducer, secondValue);
        return result;
    }
}

module.exports = reduce;