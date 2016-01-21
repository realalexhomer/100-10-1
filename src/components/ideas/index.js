import angular from 'angular';
import IdeasController from './ideas-ctrl';
import ideasTpl from './ideas-tpl.html';

export default angular
	.module('app.ideas', [])
	.directive('ideas', () => {
		return {
			restrict: 'E',
			controller: IdeasController,
			controllerAs: 'ideas',
			bindToController: true,
			template: ideasTpl,
			scope: {},
			replace: true,
			link: ($scope, $el) => {
			}
		};
	})
	.name;
