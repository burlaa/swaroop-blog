export function redrawOnThemeChange(draw: () => void) {
	new MutationObserver(draw).observe(document.documentElement, {
		attributeFilter: ['data-theme'],
	});
}
