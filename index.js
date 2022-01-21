function getScore(tries) {
    if (!tries || !tries.length || tries.length !== 10) {
        throw new Error("Must include 10 tries");
    }
    let score = 0;
    for (const roll of tries) {
        for (const action of roll.split("")) {
            const actionScore = parseInt(action);
            if (isNaN(actionScore)) {
                continue;
            }
            score += actionScore;
        }
    }
    return score;
}

module.exports = { getScore };