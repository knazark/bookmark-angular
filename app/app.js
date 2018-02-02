(function() {
	'use strict';

	angular
		.module('app', [
			'ui.router', // https://github.com/angular-ui/ui-router

			'app.bookmark.states',
			'app.category.states'
		])
		.config(configure);


	function configure($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app', {
				abstract: true,
				url: '/',
				views : {
					'' : {
						templateUrl: 'content.html'
					}
				}
			})
			.state('app.home', {
				url: '',
				views: {
					'bookmark': {
						component: 'bookmarkList',
						// bindings: {
						// 	items: 'items.data'
						// }
					},
					'category': {
						component: 'categoryList'
					}
				}, // Можна і так передавати дані в компонент
				// resolve: {
				// 	items: function (BookmarksService) {
				// 		return BookmarksService.getBookmarks();
				// 	}
				// }
			})
		;

		$urlRouterProvider.otherwise('/');
	}

})();