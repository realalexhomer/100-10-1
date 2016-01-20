import * as R from 'ramda';

const INITIAL_STATE = {msg: 'whatsup'};

export default function main(state = INITIAL_STATE, action) {
	if (!action || !action.type) {
		return state;
	}
	switch (action.type) {
		case 'MAIN_SAY_HI':
			return R.merge(state)(action.payload);
		default:
			return state;
	}
}