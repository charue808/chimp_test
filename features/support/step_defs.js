module.exports = function() {

	this.Given(/^I am on Yahoo$/, function () {
  	browser.url('http://yahoo.com');
	});

	this.When(/^I search for "([^"]*)"$/, function ("hello") {
  	browser.setValue('input[name="p"]', "hello");
  	browser.keys(['Enter']);
	});

	this.Then(/^I see "([^"]*)"$/, function (link) {
  	browser.waitForExist('a=' + link);
	});

};
