function getScore(rolls) {
    if (!rolls || !rolls.length) {
        throw new Error("Must include valid rolls");
    }
    return 0;
}

module.exports = { getScore };