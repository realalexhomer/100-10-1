import editorActions from '../../actions/editor-actions';
import ideaActions from '../../actions/idea-actions';
import { TITLE_LABEL } from './editor-ctrl-constants';
import { findFirstLine, isTitleLabeled } from './editor-ctrl-helpers';

export default class EditorController {
	constructor ($ngRedux, $scope) {
		let actions = Object.assign({}, editorActions, ideaActions);
		let disconnect = $ngRedux.connect(this.onUpdate, actions)(this);

		this.initialize();

		$scope.$on('$destroy', disconnect);
	}

	onKeypress($ev) {
		switch ($ev.keyCode) {
			case 13:
				console.log('enter pressed!');
				if (findFirstLine(this.text) && !isTitleLabeled(this.text)){
					console.log('this.text', this.text);
					console.log(TITLE_LABEL);
					this.text = TITLE_LABEL + this.text;
					console.log('now,', this.text);
				}
			default:
				return false;
		}
	}



	initialize() {

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
