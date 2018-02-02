(function() {
	'use strict';

	var categoryList = {
		bindings: {},
		templateUrl: 'app/category/components/category-list.html',
		controller: function (CategoriesService) {
			var vm = this;

			CategoriesService.getCategories().then(function (resp) {
				vm.categories = resp.data;
			});
		}
	};

	angular
		.module("app.category.components", [])

		.component('categoryList', categoryList)
	;

})();