export function sayHi(msg) {
	return {
		type: 'NAV_SAY_HI',
		payload: {
			msg: msg
		}
	}
}

export default {
	sayHi
}