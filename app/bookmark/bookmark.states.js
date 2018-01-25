(function () {
	'use strict';

	angular
		.module('app.bookmark.states', [
			'app.bookmark.services',
			'app.bookmark.components'
		])

		.config(configure)
	;

	/* Fn
	 ============================================================================================================= */
	function configure($stateProvider) {

		$stateProvider
			.state('app.bookmark', {
				url: '',
				views: {
					bookmark: {
						component: 'bookmarkList',
						bindings: {
							items: 'items.data'
						}
					}
				},
				resolve: {
					items: function (BookmarksService) {
						return BookmarksService.getBookmarks();
					}
				}
			})
		;
	}

})();
