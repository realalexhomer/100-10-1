import angular from 'angular';
import EditorController from './editor-ctrl';
import editorTpl from './editor-tpl.html';

export default angular
	.module('app.editor', [])
	.directive('editor', () => {
		return {
			restrict: 'E',
			controller: EditorController,
			controllerAs: 'editor',
			bindToController: true,
			template: editorTpl,
			scope: {},
			link: ($scope, $el) => {
			}
		};
	})
	.name;

