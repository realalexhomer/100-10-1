import { combineReducers } from 'redux';

import sample from './sample-reducer';
import editor from './editor-reducer';
import nav from './nav-reducer';
import ideas from './ideas-reducer';

const reducers = combineReducers({
	nav,
	sample,
	editor,
	ideas
});

console.log('reducers is', reducers)

export default reducers;
