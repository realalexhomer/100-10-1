import editorActions from '../../actions/editor-actions';
import ideaActions from '../../actions/idea-actions';

export default class EditorController {
	constructor ($ngRedux, $scope) {
		let actions = Object.assign({}, editorActions, ideaActions);
		let disconnect = $ngRedux.connect(this.onUpdate, actions)(this);

		$scope.$on('$destroy', disconnect);
	}

	onKeypress($ev) {
		switch ($ev.keyCode) {
			case 13:
				console.log('enter pressed!');
			default:
				return false;
		}
	}

	onSubmit($ev) {
		this.postIdea({
			text: this.text,
			title: 'default title',
			created: 'tomorrow',
			id: Math.floor(Math.random() * 1000000000)
		});
	}

	onUpdate(state) {
		return {
			text: state.editor.text,
			msg: state.editor.msg,
			ideas: state.ideas
		}
	}
}
