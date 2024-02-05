function editElement(el, old, replacement) {
el.textContent = el.textContent.split(old).join(replacement)
}