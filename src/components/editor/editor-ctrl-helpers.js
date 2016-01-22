import { TITLE_LABEL } from './editor-ctrl-constants';

let findFirstLine = (str) => {
	if (str.length < 1) return false;
	return str.split('\n')[0];
}

let isTitleLabeled = (str) => {
	console.log('const is', TITLE_LABEL);
	return (str.indexOf(TITLE_LABEL) === 0)
}


export { findFirstLine, isTitleLabeled }
