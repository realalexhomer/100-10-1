import mainActions from '../../actions/main-actions';

export default class MainController {
	constructor ($ngRedux, $scope) {
		let disconnect = $ngRedux.connect(this.onUpdate, mainActions)(this);

		$scope.$on('$destroy', disconnect);
	}

	onUpdate(state) {
		return {
			msg: state.main.msg
		}
	}
}
