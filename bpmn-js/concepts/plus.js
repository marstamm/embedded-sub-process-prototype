import { fire, on } from "../util/eventBus.js";
import { applyCss, createElement } from "../util/util.js";

on('open', () => {
  const viewer = window.viewer;

  const elementRegistry = viewer.get('elementRegistry');
  const overlays = viewer.get('overlays');

  elementRegistry.getAll().forEach(element => {
    if(element.type === "bpmn:SubProcess" && element.collapsed) {
      let html = createElement('<div></div>')

      applyCss(html, {
        backgroundColor: "rgba(0,0,255,0.2)",
        width: '15px',
        height: '15px',
        padding: 5,
      });

      html.addEventListener('click', () => {
        console.log(element);
        fire('open', element.id);
      });

      overlays.add(element, {
        position: {
          left: 42,
          bottom: 20
        },
        html
      })
    }
  });
})