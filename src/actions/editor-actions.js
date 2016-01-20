export function sayHi(msg) {
	return {
		type: 'EDITOR_SAY_HI',
		payload: {
			msg: msg
		}
	}
}

export default {
	sayHi
}