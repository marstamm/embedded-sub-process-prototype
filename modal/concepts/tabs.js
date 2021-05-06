import { fire, on } from "./eventBus.js";
import { createElement } from "./util.js";

let tabs = -1;

on('open', level => {
  if(level <= tabs) return;

  tabs++;
  let newTab = createElement(`<div class="tab">parent.bpmn ${level ? '(level ' + level + ')' : ''}</div>`);
  newTab.addEventListener('click', () => {
    fire('open', level);
  })
  document.querySelector('.tabs').appendChild(newTab);
});