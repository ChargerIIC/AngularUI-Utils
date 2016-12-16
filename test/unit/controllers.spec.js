'use strict';

var scope;

describe('controller specs', function () {
    beforeEach(module('myApp.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
    }));

    it("should contain 'Test'", function () {
        expect("Test").toBe("Test");
    });
});
