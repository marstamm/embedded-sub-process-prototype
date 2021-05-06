import { on } from "./eventBus.js";
import { createElement } from "./util.js";


let preview = createElement('<div></div>')


on('selected', element => {
  if(!element) {
    preview.remove();
    return;
  }

  applyCss();
});