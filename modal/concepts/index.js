import "./tabs.js"

import { fire, on } from "./eventBus.js";
import { applyCss, createElement } from "./util.js";


let preview = createElement(`<div>
<button style="position: absolute;top: 10px;">Open in new Tab</button>
<img src="./resources/child1.svg"></img> 
</div>`);


preview.querySelector('button').addEventListener('click', () => {
  fire('open', window.level + 1);
})

on('open', () => {
  preview.remove();
})

on('selected', element => {
  if(!element) {
    preview.remove();
    return;
  }  
  const bounds = element.getBoundingClientRect();

  const style = {
    position: 'absolute',
    top: bounds.y + bounds.height + 'px',
    left: bounds.x + bounds.width + 'px',
    border: '1px solid black',
    padding: '25px',
    boxShadow: '2px 2px #888'
  }

  applyCss(preview, style);
  document.body.appendChild(preview);
});