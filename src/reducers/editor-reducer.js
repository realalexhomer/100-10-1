import * as R from 'ramda';

const INITIAL_STATE = {msg: 'hello', text: 'text'};

export default function editor(state = INITIAL_STATE, action) {
	if (!action || !action.type) {
		return state;
	}
	switch (action.type) {
		case 'EDITOR_SAY_HI':
			return R.merge(state)(action.payload);
		case 'EDITOR_SUBMIT':
			return R.merge(state)(action.payload);
		default:
			return state;
	}
}