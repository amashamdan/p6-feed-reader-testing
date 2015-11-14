/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /**
     * This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     *@function
     */
    describe('RSS Feeds', function() {
        /** 
         * This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         *@function
         */
        it('are defined', function() {
            /** Checks that the variable containing the information about the feeds
            is defined */
            expect(allFeeds).toBeDefined();
            /** Checks that the allFeeds variable actually contains information. */
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * A test that loops through each feed in the allFeeds object and ensures 
         * it has a URL defined and that the URL is not empty.
         *@function
         */
         it('have valid links', function() {
            /** Loop through each feed item */
            allFeeds.forEach(function(feed) {
                /** Checks that a feed has a url property defined */
                expect(feed.url).toBeDefined();
                /** checks that each feed's url is not empty */
                expect(feed.url.length).not.toBe(0);
            });
         });

        /** 
         * Write a test that loops through each feed in the allFeeds object and ensures 
         * it has a name defined and that the name is not empty.
         *@function
         */
         it('have names', function() {
            /** Loop through each feed item */
            allFeeds.forEach(function(feed) {
                 /** Checks that a feed has a name property defined */
                expect(feed.name).toBeDefined();
                /** checks that each feed's name is not empty */
                expect(feed.name.length).not.toBe(0);
            });
         });
    });

    /**
     * A new test suite named "The menu" 
     *@function
     */
    describe('The menu', function() {
        /**
         * A test that ensures the menu element is hidden by default.
         *@function
         */
         it('is hidden by default', function() {
            /** Checks that the body of the html has the menu-hidden class. This class
            is responsible for hiding the menu by default. */
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /**
          * A test that ensures the menu changes visibility when the menu icon 
          * is clicked. This test has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          *@function
          */
          it('changes visibility when menu icon is clicked', function() {
            /** The menu icon is clicked. */
            $('.icon-list').click();
            /** Checks that the menu-hidden class is toggled off, the menu should be visible now */
            expect($('body').hasClass('menu-hidden')).toBe(false);
            /** The menu icon is clicked again. */
            $('.icon-list').click();
            /** Checks that the menui-hidden class is toggled on, the menu should be hidden now */
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    /**
    * A new test suite named "Initial Entries" 
    *@function
    */
    describe('Initial entries', function() {
        /** Before we run the test, we have to wait for the first feed to be loaded. hence the
        function done() is used. */
        beforeEach(function(done) {
            loadFeed(0,function() {
                done();
            });
        });

        /**
         * A test that ensures when the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         *@function
         */
        it('have at least one entry', function(done) {
            /** Checks that the feed has at least one entry by making sure its length is larger than 0 */
            expect($('.feed').length).toBeGreaterThan(0);
            done();
        });
    });
    
    /** 
    * A new test suite named "New Feed Selection"
    *@function
    */
    describe('New Feed Selection', function() {
        /** A variable used to store the current content of the feed. */
        var lastContent;

        beforeEach(function(done) {
            /** Before that test is run, the contents of the first feed are stored in lastContent. */
            lastContent = $('.feed').html();
            /** A new feed is loaded. The function done is used since it's an async function */
            loadFeed(1,function() {
                done();
            });
        });

        /** 
         * A test that ensures when a new feed is loaded by the loadFeed function that the 
         * content actually changes.
         *@function
         */
        it('changes the content', function(done) {
            /** Checks that the contents of the new feed are different than those of the old feed */
            expect($('.feed').html()).not.toEqual(lastContent);
            /** The default feed is loaded back */
            loadFeed(0);
            done();
        });
    });
}());