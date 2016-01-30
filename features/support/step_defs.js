module.exports = function() {

	this.Given(/^I am on Google$/, function () {
  	browser.url('http://google.com');
	});

	this.When(/^I search for "([^"]*)"$/, function (arg1) {
  // Write the automation code here
  pending();
	});

	this.Then(/^I see "([^"]*)"$/, function (arg1) {
  // Write the automation code here
  pending();
	});

};
