import sampleActions from '../../actions/sample-actions';

export default class SampleController {
	constructor ($ngRedux, $scope) {
		let disconnect = $ngRedux.connect(this.onUpdate, sampleActions)(this);

		$scope.$on('$destroy', disconnect);
	}

	onUpdate(state) {
		console.log('state is in onupdate is', state)
		return {
			msg: state.sample.msg
		}
	}
}
