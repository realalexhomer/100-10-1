import * as R from 'ramda';

const INITIAL_STATE = [{
	name: 'cameFrominit',
	text: "asfasdf",
	created: '1',
	id: Math.floor(Math.random() * 1000000000)
}];

export default function editor(state = INITIAL_STATE, action) {
	if (!action || !action.type) {
		return state;
	}
	let payload = action.payload;

	switch (action.type) {
		case 'IDEA_POST':
			return R.append(payload)(state);
		case 'IDEA_PUT':
			// return R.merge(state)(action.payload);
			return state
		case 'IDEA_GET':
			return state;
		case 'IDEA_DELETE':
			return R.filter((o) => {
				return parseInt(o.id) !== parseInt(payload.id);
			}, state);
		default:
			return state;
	}
}