function getScore(frames) {
    if (!frames || !frames.length || frames.length !== 10) {
        throw new Error("Must include 10 frames");
    }
    let score = 0;
    for (let i = 0; i < frames.length; i++) {
        const frame = frames[i];
        for (const roll of frame.split("")) {
            const rollScore = parseInt(roll);
            if (isNaN(rollScore)) {
                if (roll === '/') {
                    score += 10 - parseInt(frame.split("")[0]);
                    if (i + 1 < frames.length) {
                        score += parseInt(frames[i+1].split("")[0]);
                    }
                }
            } else {
                score += rollScore;
            }
        }
    }
    return score;
}

module.exports = { getScore };