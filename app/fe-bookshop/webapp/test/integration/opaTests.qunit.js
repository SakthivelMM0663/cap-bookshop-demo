sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'febookshop/test/integration/FirstJourney',
		'febookshop/test/integration/pages/AuthorsList',
		'febookshop/test/integration/pages/AuthorsObjectPage',
		'febookshop/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('febookshop') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);