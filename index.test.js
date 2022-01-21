const scorer = require("./index");

describe("bowling tests", () => {
    it("function exists", () => {
        scorer.getScore([]);
    });

    it("returns a numerical score", () => {
        const score = scorer.getScore([]);

        expect(score).toEqual(expect.any(Number));
    });
});
