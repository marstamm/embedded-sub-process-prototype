import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";

let currentLevel;
let active = false;

const template = '<button>Back to Parent</button>';
const style = {
  display: 'block',
  margin: '25px 25px 0',
}
const button = createElement(template);
applyCss(button, style);

button.addEventListener('click', () => {
  fire('open', currentLevel - 1);
});

const addButton = () => {
  console.log('addButton', currentLevel);
  if(currentLevel >= 1) {
    modeler.prepend(button);
  }
  if (currentLevel === 0) {
    button.remove();
  }
}

on('open', level => {
  currentLevel = level;
  
  if(!active) return;

  addButton();
})

on('navigation-change', type => {
  active = type === 'parent';
  console.log(active);
  active && addButton();
})