export const applyCss = (element, css) => {
  console.log(element);
  for (const [key, value] of Object.entries(css)) {
    console.log(key, value);
    element.style[key] = value;
  }
}

export const openDiagram = (path) => {
  return fetch(path).then(async res => {
    if (!res.ok) { 
      diagram_container.innerHTML = '';
      return;
    }

    const resSvg = await res.text();
    diagram_container.innerHTML = resSvg;
  });
}

export const fetchDiagram = (path) => {
  return fetch(path).then(async res => {
    if (!res.ok) { 
      return res;
    }

    return await res.text();
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

export const clearElements = selector => {
  document.querySelectorAll(selector).forEach(el => {
    el.remove();
  })
}