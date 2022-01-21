const scorer = require("./index");

describe("bowling tests", () => {
    it("function exists", () => {
        scorer.getScore([1]);
    });

    it("returns a numerical score", () => {
        const score = scorer.getScore([1]);

        expect(score).toEqual(expect.any(Number));
    });

    it("fails if there are no rolls", (done) => {
        try {
            scorer.getScore([]);
        } catch {
            done()
        }
    });
});
