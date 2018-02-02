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
			.state('app.bookmark.create', {
				url: '',
				views: {

				}
			})
		;
	}

})();
