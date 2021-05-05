import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";

let currentLevel;
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

on('open', level => {
  currentLevel = level;
  if(level === 1) {
    modeler.prepend(button);
  }
  if (level === 0) {
    button.remove();
  }
})