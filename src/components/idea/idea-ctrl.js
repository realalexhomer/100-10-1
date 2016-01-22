import ideaActions from '../../actions/idea-actions';

export default class IdeaController {
	constructor ($ngRedux, $scope) {
		let disconnect = $ngRedux.connect(this.onUpdate, ideaActions)(this);
		$scope.$on('$destroy', disconnect);
	}

	onClickDelete(id){ // not firing
		this.deleteIdea(id);
	}

	onUpdate(state) {
		return {
			idea: state.idea
		}
	}
}
