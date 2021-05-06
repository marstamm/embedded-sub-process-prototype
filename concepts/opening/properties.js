import { fire, on } from "../eventBus.js";
import { clearElements, createElement } from "../util.js";

let active = false;
let currentLevel;

on('open', level => {
  clearElements('.propertiesPanel');
  currentLevel = level;
})

on('opening-change', type => {
  active = type === 'properties';
});

on('selected', element => {
  clearElements('.propertiesPanel');
  if(!active || !element) return;

  let propertyPanel = createElement('<img class="propertiesPanel" src="resources/properties-sub-process.png"></img>');
  propertyPanel.addEventListener('click', () => {
    fire('open', currentLevel + 1);
  })
  document.body.appendChild(propertyPanel);
});
