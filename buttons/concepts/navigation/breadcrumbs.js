import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";
import { applyCss, createElement } from "../util.js";


let currentLevel = 0;
let active = false;

const template = '<div id="breadcrumbs"></div>';
const style = {
  margin: "15px 15px 0",
  display: 'none'
}

const breadcrumbs = createElement(template);
applyCss(breadcrumbs, style);


on('open', level => {

  const name = processMap[level].name;

  const el = createElement(`<span class="crumb" id="crumb-${level}">${name}</span>`)
  
  el.addEventListener('click', () => {
    fire('open', level);
    const nodesToRemove = [el]
    for(let sibling = el.nextSibling; sibling; sibling = sibling.nextSibling) {
      nodesToRemove.push(sibling)
    };

    nodesToRemove.forEach(el => el.remove())
  });
  breadcrumbs.appendChild(el);


  breadcrumbs.style.display = level === 0 ? 'none' : '';

  currentLevel = level;

  active && modeler.prepend(breadcrumbs);
})

on('navigation-change', type => {
  active = type === 'breadcrumbs';
  if(active) {
    modeler.prepend(breadcrumbs);
  }
  else {
    breadcrumbs.remove();
  }
})