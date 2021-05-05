import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";

let active = false;
let currentLevel;

function addButton(element) {
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
    fire('open', currentLevel + 1);
  });
  return button;
}

const init = (level) => {
  currentLevel = level;
  document.querySelectorAll('overlayWrapper').forEach(el => el.remove());
  if(!active) return;

  const existingProcess = document.querySelector('[data-element-id="existingEmbeddedProcess"]')
  const missingProcess = document.querySelector('[data-element-id="missingProcess"]')

  addButton(existingProcess);


}

on('open', level => init(level));

on('opening-change', type => {
  active = type === 'overlay';
  if(active && typeof currentLevel !== 'undefined') {
    init(currentLevel);
  }
});