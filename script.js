import { fire, on } from "./concepts/eventBus.js";
import { openDiagram } from "./concepts/util.js"
import "./concepts/navigation/index.js"
import "./concepts/opening/index.js"


on('open', async level => {
  if(level === 0) {
    await openDiagram('./resources/parent.svg');
  } else {
    await openDiagram(`./resources/child${level}.svg`);
  }
}, 100);

(async () => {
  await openDiagram('./resources/parent.svg');
  await fire('init');
})()



