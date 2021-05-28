import { fire, on } from "../util/eventBus.js";
import processMap from "../util/processMap.js";
import { applyCss, createElement } from "../util/util.js";

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

  });

  const eventBus = viewer.get('eventBus');
  const ContextPad = viewer.get('contextPad');
  console.log(ContextPad);
  
  const contextPadProvider = {
    getContextPadEntries: function(element) {
      return function(entries) {
        if(element?.type === "bpmn:SubProcess" && element?.collapsed) {
          return {
            ...entries,
            'entry-1': {
              label: 'AAA',
              action: function() { fire('open', element.id) },
              className: 'bpmn-icon-subprocess-expanded'
            }
          };
        }
        return entries;

      }
    }
  };
  ContextPad.registerProvider(800, contextPadProvider);

  eventBus.on('selection.changed', 999, e => {
    const selection = e.newSelection[0];
    if(selection?.type === "bpmn:SubProcess" && !selection?.collapsed && !blacklist.includes(selection?.id)) {
      ContextPad.close();
    }
  });

});
















