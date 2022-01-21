const scorer = require("./index");

describe("bowling tests", () => {
    it("function exists", () => {
        expect(scorer.getScore).toEqual(expect.any(Function));
    });

    it("fails if there are no frames", () => {
        expect(() => {
            scorer.getScore([]);
        }).toThrow();
    });

    it("fails if there are fewer than 10 frames", () => {
        expect(() => {
            scorer.getScore(["1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-"]);
        }).toThrow();
    });

    it("totals a numbers-only score correctly", () => {
        expect(
            scorer.getScore(["1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-"])
        ).toEqual(10);
    });

    it("totals max numbers-only score correctly", () => {
        expect(
            scorer.getScore(["9-", "9-", "9-", "9-", "9-", "9-", "9-", "9-", "9-", "9-"])
        ).toEqual(90);
    });
});
