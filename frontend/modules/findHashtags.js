function findHashtags(searchText) {
    var regexp = /\B\#\w\w+\b/g
    result = searchText.match(regexp);
    if (result) {
        console.log(result);
    } else {
        return false;
    }
}

export default findHashtags