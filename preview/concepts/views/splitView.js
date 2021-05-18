import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";
import { applyCss, createElement, fetchDiagram } from "../util.js";


let currentLevel = 0;
let active = true;


const buttons = createElement(`
<div id="navigationButtons">
  <button id="togglePreview">Toggle Preview</button>
  <button id="toParent">Edit Parent</button>
</div>`)

applyCss(buttons, {
    display: 'block',
    margin: '25px',
});

const template = '<div id="preview"></div>';
const style = {
  // display: 'none',
  height: '100%',
  width: '250px',
  overflow: 'hidden',
  border: '1px solid black'
}

const preview = createElement(template);
applyCss(preview, style);


preview.addEventListener('click', () => {
  fire('open', processMap[currentLevel].parent);
});

buttons.querySelector('#toParent').addEventListener('click', () => {
  fire('open', processMap[currentLevel].parent);
});

buttons.querySelector('#togglePreview').addEventListener('click', () => {
  preview.style.display = preview.style.display === 'none' ? 'inline-block' : 'none';
});

on('open', async level => {

  const parent = processMap[level].parent;

  const diagram = await fetchDiagram('./resources/' + processMap[parent].link);
  
  preview.innerHTML = diagram;
  // el.addEventListener('click', () => {
  //   fire('open', level);
  //   const nodesToRemove = [el]
  //   for(let sibling = el.nextSibling; sibling; sibling = sibling.nextSibling) {
  //     nodesToRemove.push(sibling)
  //   };

  //   nodesToRemove.forEach(el => el.remove())
  // });
  // preview.appendChild(el);


  preview.style.display = level === 0 ? 'none' : 'inline-block';

  currentLevel = level;

  if(active) {
    modeler.prepend(preview);
    modeler.prepend(buttons);
  } 
})