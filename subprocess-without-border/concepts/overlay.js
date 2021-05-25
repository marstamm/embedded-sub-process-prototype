import { fire, on } from "../util/eventBus.js";
import processMap from "../util/processMap.js";
import { applyCss, createElement } from "../util/util.js";

const blacklist = [
  'Activity_1b7wgec', // "TODO" subprocess
  'Activity_0j0s3d7'  // Expanded subprocess
]

on('open', level => {
  const viewer = window.viewer;

  const elementRegistry = viewer.get('elementRegistry');
  const overlays = viewer.get('overlays');

  elementRegistry.getAll().forEach(element => {
    if(element.type === "bpmn:SubProcess" && element.collapsed && !blacklist.includes(element.id)) {
      let html = createElement('<button>></button>')

      applyCss(html, {
        backgroundColor: "white",
        width: '15px',
        height: '15px',
        padding: 0,
        border: '1px solid black'
      });

      html.addEventListener('click', () => {
        console.log(element);
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

    if(element.type === "bpmn:SubProcess" && !element.collapsed && !blacklist.includes(element.id)) {
      let html = createElement('<button><</button>')

      applyCss(html, {
        backgroundColor: "white",
        width: '15px',
        height: '15px',
        padding: 0,
        border: '1px solid black'
      });

      html.addEventListener('click', () => {
        fire('open', processMap[level].parent);
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


  const eventBus = viewer.get('eventBus');
  const ContextPad = viewer.get('contextPad');
  console.log(ContextPad);
  
  eventBus.on('selection.changed', 999, e => {
    const selection = e.newSelection[0];
    if(selection?.type === "bpmn:SubProcess" && !selection?.collapsed) {
      ContextPad.close();
    }
  });

})