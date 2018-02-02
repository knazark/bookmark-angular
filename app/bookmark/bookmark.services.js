(function() {
	'use strict';

	angular
		.module('app.bookmark.services', [])

		.service('BookmarksService', BookmarksService)
	;

	function BookmarksService($http, $q) {
		var service = {
			getBookmarks: getBookmarks,
			getBookmarkById: getBookmarkById,
			createBookmark: createBookmark,
			deleteBookmark: deleteBookmark
		};

		var URLS = {
			FETCH: 'json/bookmarks.json'
		}, bookmarks;

		return service;

		/**
		 * Get bookmarks
		 * @returns {*}
		 */
		function getBookmarks() {
			return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH).then(function (resp) {
				return resp;
			});
		}

		/**
		 * get Bookmark By Id
		 */
		function getBookmarkById() {

		}

		/**
		 * create Bookmark
		 */
		function createBookmark() {

		}

		/**
		 * delete Bookmark
		 */
		function deleteBookmark() {

		}

		/**
		 * edit Bookmark
		 */
		function editBookmark() {

		}
	}

})();
