(function() {
	'use strict';

	var bookmarkList = {
		bindings: {
			items: '<'
		},
		templateUrl: 'app/bookmark/components/bookmark-list.html',
		controller: function ($stateParams, BookmarksService) {
			var vm = this;

			BookmarksService.getBookmarks().then(function (resp) {
				vm.bookmarks = resp.data;
			});

			vm.currentCategoryName = $stateParams.category;
		}
	};

	angular
		.module("app.bookmark.components", [])

		.component('bookmarkList', bookmarkList)
	;

})();