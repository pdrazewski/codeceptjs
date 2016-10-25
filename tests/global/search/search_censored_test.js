const helpers = require('../../../helpers.js');

Feature('Search tests - censored');

helpers.sizes.forEach(function(size){
    let paths = helpers.generateLinks("search-censored", size);
    let random = helpers.faker.internet.password();

    Scenario(size + ': I have searched for baaaaaaaad words', function*(I) {
        I.resizeWindow(size, 1900);
        I.amOnPage(helpers.url);
        let element = yield I.executeScript(function(){
            return document.querySelectorAll('.b-header form[action] #query_querystring').length
        });
        if (element) {
            I.click('.b-header form[action] #query_querystring');
            I.fillField('.b-header form[action] #query_querystring', "thong");
            I.executeScript(function(){
                document.querySelectorAll('.b-header form[action]')[0].submit();
            });
            I.wait(2); 
            I.saveScreenshot(paths.screenPath1); 
            I.scrollTo('.b-footer'); 
            I.saveScreenshot(paths.screenPath2); 
            I.dontSeeElementInDOM(".js-filter-block"); 
        } else {
            I.dontSeeElementInDOM('.b-header form[action] #query_querystring');  
            I.saveScreenshot(paths.screenPath1);
        }
    });
});
