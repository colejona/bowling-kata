function isNumber(num) {
    return !isNaN(num);
}

function getTotalPinsKnockedDownInFrame(frame) {
    let pins = 0;
    for (const roll of frame.split("")) {
        const pinsInRoll = parseInt(roll);
        if (isNumber(pinsInRoll)) {
            pins += pinsInRoll;
        }
    }
    return pins;
}

function getScore(frames) {
    if (!frames || !frames.length || frames.length !== 10) {
        throw new Error("Must include 10 frames");
    }
    let score = 0;
    for (let i = 0; i < frames.length; i++) {
        const frame = frames[i].split("");
        const firstRoll = parseInt(frame[0]);
        if (isNumber(firstRoll)) {
            score += firstRoll;
        } else if (frame[0] === "X") {
            score += 10;
            if (i + 1 < frames.length) {
                score += getTotalPinsKnockedDownInFrame(frames[i + 1]);
            }
        }
        const secondRoll = parseInt(frame[1]);
        if (isNaN(secondRoll)) {
            if (frame[1] === '/') {
                score += (10 - firstRoll);
                if (i + 1 < frames.length) {
                    const nextRoll = parseInt(frames[i+1].split("")[0]);
                    if (isNumber(nextRoll)) {
                        score += nextRoll;
                    }
                }
            }
        } else {
            score += secondRoll;
        }
    }
    return score;
}

module.exports = { getScore };