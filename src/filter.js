const filter = (list, someFunction) => {

    if(list.length === 0)
    {
        return [];
    }

    filterUpperCase = (alpha) => {
        return alpha >= 'A' && alpha <= 'Z';
    }

    var result = list.filter(someFunction);
    return result;


}

module.exports = filter;