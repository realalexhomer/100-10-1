export function postIdea(idea) {
	return {
		type: 'IDEA_POST',
		payload: {
			name: 'alex',
			created: idea.created,
			text: idea.text,
			id: idea.id
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

export function deleteIdea(id) {
	return {
		type: 'IDEA_DELETE',
		payload: {
			id: id
		}
	}
}


export default {
	postIdea, selectIdea, deleteIdea
}