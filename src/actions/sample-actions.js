export function sayHi(msg) {
	return {
		type: 'SAMPLE_SAY_HI',
		payload: {
			msg: msg
		}
	}
}

export default {
	sayHi
}