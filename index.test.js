const scorer = require("./index");

describe("bowling tests", () => {
    it("function exists", () => {
        expect(scorer.getScore).toEqual(expect.any(Function));
    });

    it("fails if there are no tries", () => {
        expect(() => {
            scorer.getScore([]);
        }).toThrow();
    });

    it("fails if there are fewer than 10 tries", () => {
        expect(() => {
            scorer.getScore(["1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-"]);
        }).toThrow();
    });

    it("totals a numbers-only score correctly", () => {
        expect(
            scorer.getScore(["1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-", "1-"])
        ).toEqual(10);
    });
});
