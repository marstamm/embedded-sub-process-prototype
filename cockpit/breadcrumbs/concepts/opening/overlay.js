import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";
import { applyCss, createElement } from "../util.js";

let active = false;
let currentLevel;

function addButton(element, process) {
  if(!active) return;

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
    console.log(processMap[process]?.link);
    fire('open', process);
  });
  return wrapper;
}

const init = (level) => {
  currentLevel = level;
  document.querySelectorAll('.overlayWrapper').forEach(el => el.remove());

  document.querySelectorAll('.djs-element.djs-shape').forEach(el => {
    let process = el.getAttribute('data-element-id');
    
    if (processMap[process] && processMap[process].link !== 'nothing.svg') {
      addButton(el, process);
    }
  })
  
  // addButton(existingProcess);
}

on('selected', element => {
  let process = element.getAttribute('data-element-id');
  addButton(element, process);
});

on('open', level => init(level));

on('opening-change', type => {
  active = type === 'overlay';
  if(active && typeof currentLevel !== 'undefined') {
    init(currentLevel);
  }
});