import angular from 'angular';
import ngRedux from 'ng-redux';
import reducers from './reducers';
import sampleComponent from './components/sample';
import editorComponent from './components/editor';
import navComponent from './components/nav';
import styles from './styles/main.scss';
import ideasComponent from './components/ideas';
import ideaComponent from './components/idea';

angular.module('app', [
	ngRedux,
	navComponent,
	sampleComponent,
	editorComponent,
	ideaComponent,
	ideasComponent
])
.config(($ngReduxProvider) => {
	$ngReduxProvider.createStoreWith(reducers, [ /* middleware goes here*/ ]);
})
.name;