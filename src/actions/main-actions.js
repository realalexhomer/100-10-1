export function sayHi(msg) {
	return {
		type: 'MAIN_SAY_HI',
		payload: {
			msg: msg
		}
	}
}

export default {
	sayHi
}