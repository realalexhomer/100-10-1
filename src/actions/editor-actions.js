export function sayHi(msg) {
	return {
		type: 'EDITOR_SAY_HI',
		payload: {
			msg: msg
		}
	}
}

export function submit(text) {
	return {
		type: 'EDITOR_SUBMIT',
		payload: {
			text: text
		}
	}
}

export default {
	sayHi, submit
}