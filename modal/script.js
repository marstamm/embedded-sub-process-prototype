import { fire, on } from "./concepts/eventBus.js";
import { clearModeler, openDiagram } from "./concepts/util.js"
import "./concepts/index.js"


const params = new URLSearchParams(location.search);

// let navigation = params.get('navigation') || 'parent';
// navigationSelect.value = navigation;

// fire('navigation-change', navigationSelect.value);
// on('navigation-change', value => {
//   params.set('navigation', value);
//   window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
// });
// navigationSelect.addEventListener('change', () => {
//     fire('navigation-change', navigationSelect.value);
// });

// let opening = params.get('opening') || 'plus';
// openingSelect.value = opening;
// fire('opening-change', openingSelect.value);
// on('opening-change', value => {
//   params.set('opening', value);
//   window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
// });
// openingSelect.addEventListener('change', () => {
//     fire('opening-change', openingSelect.value);
// });

window.level = 0;

on('open', async (level, present) => {
  window.level = level;
  clearModeler();
  if(present === false) {
    return await openDiagram('./foobar');
  }
  if(level === 0) {
    await openDiagram('./resources/parent.svg');
  } else {
    await openDiagram(`./resources/child${level}.svg`);
  }

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



