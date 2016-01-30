module.exports = function() {

	this.Given(/^I am on Yahoo$/, function () {
  	browser.url('http://yahoo.com');
	});

	this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
	var searchTerm = "hello";
  	browser.setValue('input[name="p"]', searchTerm );
  	browser.keys(['Enter']);
	});

	this.Then(/^I see "([^"]*)"$/, function (link) {
  	browser.waitForExist('a=' + link);
	});

};
