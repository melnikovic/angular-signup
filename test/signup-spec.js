describe('SignUp form', function() {
    var email = element(by.id('email'));
    var password = element(by.id('password'));
    var rePassword = element(by.id('rePassword'));
    var registerButton = element(by.id('register'));
    var logoutButton = element(by.id('logout'));

    beforeEach(function() {
        // This url have to be change, based on where your signup file is runing
        browser.get('http://localhost:63342/angular-signup/index.html');
    });

    it('should have a correct title', function() {
        expect(browser.getTitle()).toEqual('SignUp form');
    });

    it('should try to insert valid data to form', function() {
        email.sendKeys('john@doe.com');
        password.sendKeys('johndoe');
        rePassword.sendKeys('johndoe');
    });

    it('should test that register button is clickable', function() {
        expect(registerButton.isEnabled()).toBe(true);
        registerButton.click();
    });

    it('should check if user is logged', function() {
        // Check if element logout button exist
        expect(logoutButton.isPresent()).toBe(false);
    });
});
