import angular from 'angular';
import IdeaController from './idea-ctrl';
import ideaTpl from './idea-tpl.html';

export default angular
	.module('app.idea', [])
	.directive('idea', () => {
		return {
			restrict: 'E',
			controller: IdeaController,
			controllerAs: 'idea',
			bindToController: true,
			template: ideaTpl,
			scope: {},
			replace: true,
			link: ($scope, $el, attrs) => {
				$scope.idea = Object.assign({}, attrs);
			}
		};
	})
	.name;
