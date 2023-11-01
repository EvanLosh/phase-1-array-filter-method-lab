// Code your solution here

function findMatching(namesArray, filterString) {
    return namesArray.filter((x) => {
        return x.toLowerCase() === filterString.toLowerCase();
    });
}

function fuzzyMatch(namesArray, filterString) {
    return namesArray.filter((x) => {
        return x.substring(0, filterString.length).toLowerCase() === filterString.toLowerCase();
    });
}

function matchName(objectsArray, filterString) {
    // The objects in objectsArray have keys called name and hometown
    return objectsArray.filter((x) => {
        return x.name.toLowerCase() === filterString.toLowerCase();
    });
}