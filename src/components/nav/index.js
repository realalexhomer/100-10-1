import angular from 'angular';
import navController from './nav-ctrl';
import navTpl from './nav-tpl.html';

export default angular
	.module('app.nav', [])
	.directive('nav', () => {
		return {
			restrict: 'E',
			controller: navController,
			controllerAs: 'nav',
			bindToController: true,
			template: navTpl,
			scope: {}
		};
	})
	.name;

