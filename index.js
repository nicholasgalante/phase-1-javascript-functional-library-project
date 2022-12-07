function convertObjToArray(collection) {
    if (
        typeof collection === 'object' &&
        collection !== null &&
        !Array.isArray(collection)
    ) {
        collection = Object.values(collection)
    } else {
        collection.slice();
    }
    return collection;
}

function myEach(collection, callback) {
    const newCollection = convertObjToArray(collection);
    for (let index = 0; index < newCollection.length; index++) {
        callback(newCollection[index])
    }
    return collection;
}


function myMap(collection, callback) {
    const newCollection = convertObjToArray(collection);
    const newArray = []
    for (let index = 0; index < newCollection.length; index++) {
        newArray.push(callback(newCollection[index]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let newCollection = convertObjToArray(collection);
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

function myFind(collection, predicate) {
    const newCollection = convertObjToArray(collection);
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) { return newCollection[i] }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const newCollection = convertObjToArray(collection);
    let newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i])) {
            newArray.push(newCollection[i]);
        }
    }
    return newArray;
}

function mySize(collection) {
    const newCollection = convertObjToArray(collection);
    return newCollection.length;
}

function myFirst(array, n = false) {
    if (!n) {
        return array[0]
    } else {
        const newArray = [];
        for (let i = 0; i < n; i++) {
            newArray.push(array[i])
        }
        return newArray;
    }

}

function myLast(array, n = false) {
    if (!n) {
        return array[array.length - 1]
    } else {
        const newArray = [];
        let startIndex = array.length - n;
        for (let i = startIndex; i < array.length; i++) {
            newArray.push(array[i])
        }
        return newArray;
    }

}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

console.log('hi')
console.log(myLast([5, 4, 3, 2, 1], 1))
console.log(myLast([0, 1, 2, 3, 4, 5, 6, 7, 8], 3))