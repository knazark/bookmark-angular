(function () {
	'use strict';

	angular
		.module('app.category.states', [
			'app.category.services',
			'app.category.components'
		])

		.config(configure)
	;

	/* Fn
	 ============================================================================================================= */
	function configure($stateProvider) {

		$stateProvider
			.state('app.category', {
				url: 'category/:category',
				views: {
					'bookmark': {
						component: 'bookmarkList'
					},
					'category': {
						component: 'categoryList'
					}
				}
			})
			.state('app.category.create', {
				url: '/create',
				views: {

				}
			})
			.state('app.category.edit', {
				url: 'edit/:bookmarkId',
				views: {

				}
			})
		;
	}

})();
