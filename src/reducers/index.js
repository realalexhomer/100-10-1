import { combineReducers } from 'redux';

import sample from './sample-reducer';
import main from './main-reducer';
import editor from './editor-reducer';

const reducers = combineReducers({
	main,
	sample,
	editor
});

export default reducers;
