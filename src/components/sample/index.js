import angular from 'angular';
import SampleController from './sample-ctrl';
import sampleTpl from './sample-tpl.html';

export default angular
	.module('app.sample', [])
	.directive('sample', () => {
		return {
			restrict: 'E',
			controller: SampleController,
			controllerAs: 'sample',
			bindToController: true,
			template: sampleTpl,
			scope: {}
		};
	})
	.name;