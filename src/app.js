import angular from 'angular';
import ngRedux from 'ng-redux';
import reducers from './reducers';
import sampleComponent from './components/sample'

angular.module('app', [
	ngRedux,
	sampleComponent
])
.config(($ngReduxProvider) => {
	$ngReduxProvider.createStoreWith(reducers, [ /* middleware goes here*/ ]);
})
.name;