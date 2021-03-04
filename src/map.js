const map = (list, someObject) => {

    if(someObject == cube)
    {
        return cube(list);
    }
    if(someObject == identity)
    {
        return identity(list);
    }
    if(someObject == myFunction)
    {
        return myFunction(list);
    }
}

myFunction = (array) => {
    var result = [];
    array.forEach(element => {
        result.push(element.x + 1);
    });
    return result;
}

cube = (array) => {
    var result = [];
    array.forEach(element => {
        result.push(element*element*element);
    });
    return result;
}

identity = (array) => {
    var set = new Set();
    array.forEach(element => {
        set.add(element);
    });
    return [...set];
}

module.exports = map;