export function postIdea(idea) {
	return {
		type: 'IDEA_POST',
		payload: {
			name: 'alex',
			created: idea.created,
			text: idea.text
		}
	}
}

export function selectIdea(idx) {
	return {
		type: 'IDEA_SELECT',
		payload: {
			idx: idx
		}
	}
}

export function deleteIdea(idx) {
	console.log('here')
	return {
		type: 'IDEA_DELETE',
		payload: {
			idx: idx
		}
	}
}


export default {
	postIdea, selectIdea
}