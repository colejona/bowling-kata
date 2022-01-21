function getScore(frames) {
    if (!frames || !frames.length || frames.length !== 10) {
        throw new Error("Must include 10 frames");
    }
    let score = 0;
    for (const frame of frames) {
        for (const roll of frame.split("")) {
            const rollScore = parseInt(roll);
            if (isNaN(rollScore)) {
                continue;
            }
            score += rollScore;
        }
    }
    return score;
}

module.exports = { getScore };