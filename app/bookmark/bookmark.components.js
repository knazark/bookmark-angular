(function() {

	'use strict';

	var bookmarkList = {
		bindings: {
			items: '<'
		},
		templateUrl: 'app/bookmark/components/bookmark-list.html',
		controller: function (BookmarksService) {
			var vm = this;

			console.log(vm);
		}
	};

	angular
		.module("app.bookmark.components", [])

		.component('bookmarkList', bookmarkList)
	;

})();