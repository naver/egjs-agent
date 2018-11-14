const win = (typeof window !== `undefined` && window) || {};
const RegExp = win.RegExp;
const navigator = win.navigator;

export {
	RegExp,
	navigator,
};
