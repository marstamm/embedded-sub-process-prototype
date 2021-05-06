import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";

let active = false;
let currentLevel;

function addButton(element, preventOpen = false) {
  const bounds = element.getBoundingClientRect();
  const wrapper = document.createElement('div');
  wrapper.className = "overlayWrapper";
  const button = createElement('<Button>></Button>');
  wrapper.appendChild(button);
  const css = {
    position: 'absolute',
    left: bounds.x + bounds.width - 10,
    top: bounds.y + bounds.height - 10,
    padding: 5
  }
  applyCss(wrapper, css);
  
  modeler.appendChild(wrapper);
  button.addEventListener('click', async event => {
    wrapper.remove();
    fire('open', currentLevel + 1, !preventOpen);
  });
  return wrapper;
}

const init = (level) => {
  currentLevel = level;
  document.querySelectorAll('.overlayWrapper').forEach(el => el.remove());
  if(!active) return;

  const existingProcess = document.querySelector('[data-element-id="existingEmbeddedProcess"]')

  addButton(existingProcess);
}

on('selected', element => {
  if(element === document.querySelector('[data-element-id="missingProcess"]')) {
    addButton(element, true);
  }
});

on('open', level => init(level));

on('opening-change', type => {
  active = type === 'overlay';
  if(active && typeof currentLevel !== 'undefined') {
    init(currentLevel);
  }
});