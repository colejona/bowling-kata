function getScore(tries) {
    if (!tries || !tries.length || tries.length !== 10) {
        throw new Error("Must include 10 tries");
    }
    return 0;
}

module.exports = { getScore };