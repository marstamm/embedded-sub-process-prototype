import { fire, on } from "../util/eventBus.js";
import processMap from "../util/processMap.js";
import { applyCss, createElement } from "../util/util.js";

on('open', level => {
  
  document.querySelector('.djs-container > .subprocess-title')?.remove();
  
  if(level == 0) {
    document.body.classList.remove('subprocess')
    return;
  }

  document.body.classList.add('subprocess')
  
  let div = createElement(`<div class="subprocess-title"></div>`);

  document.querySelector('.djs-container').prepend(div);

    let html = createElement(`
      <div class="itemList">
      </div>`)

    // let toggle = html.querySelector('.toggle');

    // applyCss(toggle, {
    //   width: '15px',
    //   height: '15px',
    //   padding: 0,
    // });

    // toggle.addEventListener('click', () => {
    //   fire('open', processMap[level].parent)
    // });

    let prevEl;

    for(var parent = level; parent !== null; parent = processMap[parent].parent) {
      let name = processMap[parent].name;
      let link = parent;

      const el = createElement(`<span>${name}</span>`);
      el.addEventListener('click', () => {
        console.log('click');
        fire('open', link);
      });
      
      html.prepend(el);

    }

    console.log(html)

    div.appendChild(html);
  

});