export const applyCss = (element, css) => {
  console.log(element);
  for (const [key, value] of Object.entries(css)) {
    console.log(key, value);
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

export const clearModeler = () => {
  modeler.innerHTML = `<img id="sidebar" src="resources/sidebar.png" />
<div id="diagram_container"></div>`
}