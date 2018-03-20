const win = (typeof window !== `undefined` && window) || {};

export default {
	RegExp: win.RegExp,
	navigator: win.navigator,
};
