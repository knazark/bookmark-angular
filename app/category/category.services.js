(function() {
	'use strict';

	angular
		.module('app.category.services', [])

		.service('CategoriesService', CategoriesService)
	;

	function CategoriesService($http, $q) {
		var service = {
			getCategories: getCategories
		};

		var URLS = {
			FETCH: 'json/categories.json'
		}, categories;

		return service;

		/**
		 * get Categories
		 * @returns {*}
		 */
		function getCategories() {
			return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(function (resp) {
				return resp;
			});
		}
	}

})();
