export const applyCss = (element, css) => {
  for (const [key, value] of Object.entries(css)) {
    element.style[key] = value;
  }
}

export const openDiagram = (path) => {
  return fetch(path).then(async res => {
    const resSvg = await res.text();
    diagram_container.innerHTML = resSvg;
  });
}

export const createElement = html => {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}