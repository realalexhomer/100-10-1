import ideaActions from '../../actions/idea-actions';

export default class IdeaController {
	constructor ($ngRedux, $scope) {
		let disconnect = $ngRedux.connect(this.onUpdate, ideaActions)(this);
		$scope.$on('$destroy', disconnect);
	}

	onClickDelete(idx){ // not firing
		console.log('here (ctrlr)')
		this.deleteIdea(idx);
	}

	onUpdate(state) {
		return {
			idea: state.idea
		}
	}
}
