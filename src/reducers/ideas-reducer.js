import * as R from 'ramda';

const INITIAL_STATE = [{
	name: 'cameFrominit',
	text: 'asdfadsf',
	created: '1'
}];

export default function editor(state = INITIAL_STATE, action) {
	if (!action || !action.type) {
		return state;
	}
		console.log('state is', state);
	switch (action.type) {
		case 'IDEA_POST':
			console.log('idea posted... action is: ', action)
			console.log('state is... :', state)
			return R.append(action.payload)(state);
		case 'IDEA_PUT':
			// return R.merge(state)(action.payload);
		case 'IDEA_GET':
			return;
		case 'IDEA_DELETE':
			console.log('deleting idea with idx', action.payload.idx)
			return;
		default:
			return state;
	}
}