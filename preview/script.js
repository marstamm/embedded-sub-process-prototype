import { fire, on } from "./concepts/eventBus.js";
import { clearModeler, openDiagram } from "./concepts/util.js"
import "./concepts/navigation/index.js"
import "./concepts/opening/index.js"
import "./concepts/views/index.js"
import processMap from "./concepts/processMap.js";


const params = new URLSearchParams(location.search);

fire('opening-change', 'plus');

let view = params.get('view') || 'border';
viewSelect.value = view;
on('view-change', value => {
  params.set('view', value);
  window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
});
fire('view-change', viewSelect.value);
viewSelect.addEventListener('change', () => {
    fire('view-change', viewSelect.value);
});



on('open', async (level, present) => {
  console.log('open', level);
  clearModeler();

  await openDiagram(`./resources/${processMap[level].link}`);

  addDiagramListeners();
}, 100);



modeler.addEventListener('click', () => {
  console.log('deselect');
  fire('selected', null);
});
on('selected', element => {
  document.querySelectorAll('.selected').forEach(el => {
    if(el === element) return;
    el.classList.remove('selected');
  })
});

function addDiagramListeners() {
  document.querySelectorAll('.djs-element.djs-shape').forEach(el => {
    console.log(el);
    el.addEventListener('click', ev => {
      console.log(ev);
      el.classList.add('selected');
      fire('selected', el, ev);
      ev.stopPropagation();
    });
  });
}

(async () => {
  await fire('open', 0);
})()



