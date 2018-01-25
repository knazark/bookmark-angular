(function() {
	'use strict';

	angular
		.module('app', [
			'ui.router', // https://github.com/angular-ui/ui-router

			'app.bookmark.states'
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
		;

		$urlRouterProvider.otherwise('/');
	}

})();