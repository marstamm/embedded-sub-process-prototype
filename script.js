import { fire, on } from "./concepts/eventBus.js";
import { openDiagram } from "./concepts/util.js"
import "./concepts/navigation/index.js"
import "./concepts/opening/index.js"


const params = new URLSearchParams(location.search);



let navigation = params.get('navigation') || 'parent';
navigationSelect.value = navigation;

fire('navigation-change', navigationSelect.value);
on('navigation-change', value => {
  params.set('navigation', value);
  window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
});
navigationSelect.addEventListener('change', () => {
    fire('navigation-change', navigationSelect.value);
});

let opening = params.get('opening') || 'plus';
openingSelect.value = opening;
fire('opening-change', openingSelect.value);
on('opening-change', value => {
  params.set('opening', value);
  window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
});
openingSelect.addEventListener('change', () => {
    fire('opening-change', openingSelect.value);
});


on('open', async (level, present) => {
  if(present === false) {
    return await openDiagram('./foobar');
  }
  if(level === 0) {
    await openDiagram('./resources/parent.svg');
  } else {
    await openDiagram(`./resources/child${level}.svg`);
  }
}, 100);

(async () => {
  // await openDiagram('./resources/parent.svg');
  await fire('open', 0);
})()



