import angular from 'angular';
import ngRedux from 'ng-redux';
import reducers from './reducers';
import sampleComponent from './components/sample';
import mainComponent from './components/main';
import editorComponent from './components/editor';
import mixins from './styles/mixins.scss';
import styles from './styles/main.scss';

angular.module('app', [
	ngRedux,
	mainComponent,
	sampleComponent,
	editorComponent
])
.config(($ngReduxProvider) => {
	$ngReduxProvider.createStoreWith(reducers, [ /* middleware goes here*/ ]);
})
.name;