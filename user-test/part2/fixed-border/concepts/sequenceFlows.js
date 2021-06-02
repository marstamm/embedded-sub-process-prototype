import { on } from "../util/eventBus.js";
import { createElement } from "../util/util.js";


// let active = true;

const blacklist = [
  'Activity_1b7wgec', // "TODO" subprocess
  'Activity_0j0s3d7'  // Expanded subprocess
]



const toggleButton = createElement('<button>Toggle Sequence Flows</button>');

toggleButton.addEventListener('click', () => {
  // active = !active;
  document.body.classList.toggle('hideSequenceFlow')
})

// document.body.appendChild(toggleButton);


on('open', level => {
  const viewer = window.viewer;
  const elementRegistry = viewer.get('elementRegistry');
  const overlays = viewer.get('overlays');

  elementRegistry.getAll().forEach(element => {    
    if(element.type === "bpmn:SubProcess" && !element.collapsed && !blacklist.includes(element.id)) {

      console.log(element);

      let incoming = createElement(`<img src="resources/ingoing.png" class="sequenceFlow" style="height: 12px"/>`);
      let outgoing = createElement(`<img src="resources/outgoing.png" class="sequenceFlow" style="height: 12px"/>`);
  
      overlays.add(element, {
        position: {
          left: -61,
          top: element.height/2 - 6
        },
        html: incoming
      })

      overlays.add(element, {
        position: {
          right: -1,
          top: element.height/2 - 6
        },
        html: outgoing
      })
    }
  });
})