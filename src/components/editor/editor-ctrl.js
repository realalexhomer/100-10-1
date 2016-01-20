import editorActions from '../../actions/editor-actions';

export default class EditorController {
	constructor ($ngRedux, $scope) {
		let disconnect = $ngRedux.connect(this.onUpdate, editorActions)(this);

		$scope.$on('$destroy', disconnect);
	}

	onUpdate(state) {
		return {
			msg: state.editor.msg
		}
	}
}
