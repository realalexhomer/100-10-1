import angular from 'angular';
import MainController from './main-ctrl';
import mainTpl from './main-tpl.html';

export default angular
	.module('app.main', [])
	.directive('main', () => {
		return {
			restrict: 'E',
			controller: MainController,
			controllerAs: 'main',
			bindToController: true,
			template: mainTpl,
			scope: {}
		};
	})
	.name;