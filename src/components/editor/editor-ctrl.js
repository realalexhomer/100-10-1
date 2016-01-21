import editorActions from '../../actions/editor-actions';
import ideaActions from '../../actions/idea-actions';

export default class EditorController {
	constructor ($ngRedux, $scope) {
		let actions = Object.assign({}, editorActions, ideaActions);
		let disconnect = $ngRedux.connect(this.onUpdate, actions)(this);

		$scope.$on('$destroy', disconnect);
	}

	onKeypress($ev) {
		console.log('keypress ev', $ev);
		switch ($ev.keyCode) {
			case 13:
				console.log('enter pressed!');
			default:
				return false;
		}
	}

	onSubmit($ev) {
		console.log('this is', this);
		this.postIdea({
			text: this.text,
			title: 'default title',
			created: 'tomorrow'
		});
	}

	onUpdate(state) {
		console.log('state in onupdate is', state)
		return {
			text: state.editor.text,
			msg: state.editor.msg,
			ideas: state.ideas
		}
	}
}
