import { fire, on } from "./util/eventBus.js";
import processMap from "./util/processMap.js";
import { applyCss, createElement } from "./util/util.js";

on('open', level => {
  breadcrumbs.innerHTML = '';
  const viewer = window.viewer;

  const elementRegistry = viewer.get('elementRegistry');
  const overlays = viewer.get('overlays');

  if(level != 0) {
    let html = createElement(`
    <div class="breadcrumbs">
      <button class="toggle"><</button>
      <div class="itemList">
      </div>
    </div>`)

    let toggle = html.querySelector('.toggle');

    applyCss(toggle, {
      width: '15px',
      height: '15px',
      padding: 0,
    });

    toggle.addEventListener('click', () => {
      fire('open', processMap[level].parent)
    });

    for(var parent = level; parent !== null; parent = processMap[parent].parent) {
      let name = processMap[parent].name;
      let link = parent;

      const el = createElement(`<span>${name}</span>`);
      el.addEventListener('click', () => {
        fire('open', link);
      });
      
      html.querySelector('.itemList').prepend(el);

    }

    breadcrumbs.appendChild(html);
  }
});