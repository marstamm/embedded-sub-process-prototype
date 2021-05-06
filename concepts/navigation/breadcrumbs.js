import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";


let currentLevel = 0;
let active = false;

const template = '<div id="breadcrumbs"><span class="crumb" id="crumb-parent">Parent</span></div>';
const style = {
  margin: "15px 15px 0",
  display: 'none'
}

const breadcrumbs = createElement(template);
applyCss(breadcrumbs, style);

breadcrumbs.querySelector('#crumb-parent').addEventListener('click', () => fire('open', 0));

on('open', level => {
  if(currentLevel < level) {
    const el = createElement(`<span class="crumb" id="crumb-${level}">Level ${level}</span>`)
    
    el.addEventListener('click', () => {
      fire('open', level);
    });
    breadcrumbs.appendChild(el);
  }
  if (currentLevel > level) {
    for(var i = currentLevel; i > level; i--) {
      const el = breadcrumbs.querySelector(`#crumb-${i}`);
      el?.remove();
    }
  }

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