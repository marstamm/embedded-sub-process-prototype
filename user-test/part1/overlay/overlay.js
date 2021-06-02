import { fire, on } from "../shared/util/eventBus.js";
import processMap from "../shared/util/processMap.js";
import { applyCss, createElement } from "../shared/util/util.js";

const blacklist = [
  'Activity_1b7wgec', // "TODO" subprocess
  'Activity_0j0s3d7'  // Expanded subprocess
]

on('open', level => {
  breadcrumbs.innerHTML = '';
  const viewer = window.viewer;

  const elementRegistry = viewer.get('elementRegistry');
  const overlays = viewer.get('overlays');

  elementRegistry.getAll().forEach(element => {
    if(element.type === "bpmn:SubProcess" && element.collapsed && !blacklist.includes(element.id)) {
      let html = createElement('<button>></button>')

      applyCss(html, {
        width: '15px',
        height: '15px',
        padding: 0,
      });

      html.addEventListener('click', () => {
        fire('open', element.id);
      });

      overlays.add(element, {
        position: {
          right: 0,
          bottom: 0
        },
        html
      })
    }

  });


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

    let prevEl;

    for(var parent = level; parent !== null; parent = processMap[parent].parent) {
      let name = processMap[parent].name;
      let link = parent;

      const el = createElement(`<span>${name}</span>`);
      el.addEventListener('click', () => {
        fire('open', link);
      });
      
      html.querySelector('.itemList').prepend(el);

    }

    console.log(html)

    breadcrumbs.appendChild(html);
  }
});
















