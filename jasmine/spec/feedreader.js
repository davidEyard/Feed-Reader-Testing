$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('Each feed has URL', function(){
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.constructor).toBe(String);
                expect(feed.url.length).not.toBe(0);
            }
        });

        it('Each has a unique name', function(){
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.constructor).toBe(String);
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

describe('The menu', function(){

    it('Hidden by default', function(){
        let isHidden = document.body.classList.contains('menu-hidden');
        expect(isHidden).toBe(true);
    });


          it('View is toggled when clicked on', function(){
              let menuIcon = document.querySelector('a.menu-icon-link');
              menuIcon.click();
              expect(document.body.classList.contains('menu-hidden')).toBe(false);
              menuIcon.click();
              expect(document.body.classList.contains('menu-hidden')).toBe(true);
            });
          });

          describe('Initial Entries', function(){


         beforeEach(function(done){
             loadFeed(1, done);
         });

         it('Feed Container Entries', function(){
             let feedContainer = document.querySelector('div.feed');
             let entries = feedContainer.querySelectorAll('article.entry');
             expect(entries.length).toBeGreaterThan(0);
            });
         });

    describe('New Feed Selection', function(){

        let firstFeed, secondFeed;
            beforeEach(function(done){
                loadFeed(3, function(){
                    firstFeed = document.querySelector('div.feed').innerHTML;
                    loadFeed(2, function(){
                        secondFeed = document.querySelector('div.feed').innerHTML;
                        done();
                    });
                });
            });
                it('All loaded new Feeds', function(){
                    expect(firstFeed).not.toBe(secondFeed);
                });
            });
}());
