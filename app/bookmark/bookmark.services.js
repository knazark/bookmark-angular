(function() {
	'use strict';

	angular
		.module('app.bookmark.services', [])

		.service('BookmarksService', BookmarksService)
	;

	function BookmarksService($http, $q) {
		var service = {
			getBookmarks: getBookmarks
		};

		var URLS = {
			FETCH: 'json/bookmarks.json'
		}, bookmarks;

		return service;

		function getBookmarks() {
			return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH).then(function (resp) {
				return resp;
			});
		}
	}

})();
