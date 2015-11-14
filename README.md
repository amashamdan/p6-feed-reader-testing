Project Overview
=====================================================================
In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

Test Suites:
=====================================================================
The file jasmine/spec/feedreader.js includes all the test suites for this application.
The test suites are:
	1. RSS Feeds.
	2. The Menu.
	3. Initial Entries.
	4. New Feed Selection. 

RSS Feeds Suite:
=====================================================================
This suite has the following tests:
	1. A test to make sure that the allFeeds variable has been defined and that it is not empty.
	2. A test which ckecks that each feed has a URL defined and that the URL is not empty.
	3. A test which checks that each feed has a name defined and that the name is not empty.

The Menu Suite:
=====================================================================
This suite has the following tests:
	1. A test which ensures that the menu is hidden by default.
	2. A test which ensures that the menu changes visibility when the menu icon is clicked.

Initial Entries Suite:
=====================================================================
This suite has a single test. The test ensures that when the loadFeed function is called and completes its work, there is at least a single entry (article) within the feed container.

New Feed Selection Suite:
=====================================================================
This suite has a single test. The test ensures that when a new feed is loaded by the loadFeed function, the content actually changes.