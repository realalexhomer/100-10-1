import navActions from '../../actions/nav-actions';

export default class NavController {
	constructor ($ngRedux, $scope) {
		let disconnect = $ngRedux.connect(this.onUpdate, navActions)(this);

		$scope.$on('$destroy', disconnect);
	}

	onUpdate(state) {
		return {
			msg: state.nav.msg
		}
	}
}
