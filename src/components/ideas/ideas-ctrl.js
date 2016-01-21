import ideasActions from '../../actions/idea-actions';

export default class IdeasController {
	constructor ($ngRedux, $scope) {
		let disconnect = $ngRedux.connect(this.onUpdate, ideasActions)(this);

		$scope.$on('$destroy', disconnect);
	}

	onUpdate(state) {
		return {
			ideas: state.ideas
		}
	}
}
