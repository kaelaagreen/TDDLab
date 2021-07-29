let translate = require("./script.js");

test("Class is lassCay", () => {
    expect(translate("class")).toBe("Lasscay");
});

test("Monkey is onkeyMay", () => {
    expect(translate("Monkey")).toBe("Onkeymay");
});
test("Kaela is aelaKay", () => {
    expect(translate("Kaela")).toBe("Aelakay");
});
test("Javascript is avascriptJay", () => {
    expect(translate("Javascript")).toBe("Avascriptjay");
});
test("Pig is igPay", () => {
    expect(translate("Pig")).toBe("Igpay");
});


test("Apple is Appleway", () => {
    expect(translate("Apple")).toBe("Appleway");
});