describe("Home page", function () {
    "use strict";

    it("should display app name", function() {
        browser.get("/");
        expect(element(by.id("appName")).getText()).toBe("Skeleton App - Home");
    });

});
