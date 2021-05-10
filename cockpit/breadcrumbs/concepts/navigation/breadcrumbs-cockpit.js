import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";
import { applyCss, createElement } from "../util.js";


let currentLevel = 0;
let active = false;

// const template = '<div id="breadcrumbs"></div>';
// const style = {
//   margin: "15px 15px 0",
//   display: 'none'
// }

const breadcrumbs = crumbContainer;
// applyCss(breadcrumbs, style);

crumbsRoot.addEventListener('click', () => {
  let el = crumbsRoot;
  fire('open', 0);
  const nodesToRemove = []
  for(let sibling = el.nextSibling; sibling; sibling = sibling.nextSibling) {
    nodesToRemove.push(sibling)
  };

  nodesToRemove.forEach(el => el.remove())
});

on('open', level => {
  if(!active || level == 0) {
    return;
  }

  let existingElement = document.getElementById(`crumb-${level}`)
  if(existingElement) {
    const nodesToRemove = [existingElement]
    for(let sibling = existingElement.nextSibling; sibling; sibling = sibling.nextSibling) {
      nodesToRemove.push(sibling)
    };
  
    nodesToRemove.forEach(el => el.remove())  
  }

  const name = processMap[level].name;

  const el = createElement(`<span class="crumb" id="crumb-${level}">${name}</span>`)
  
  el.addEventListener('click', () => {
    fire('open', level);
    const nodesToRemove = [el]
    for(let sibling = el.nextSibling; sibling; sibling = sibling.nextSibling) {
      nodesToRemove.push(sibling)
    };

    nodesToRemove.forEach(el => el.remove())
  });
  breadcrumbs.appendChild(el);


  // breadcrumbs.style.display = level === 0 ? 'none' : '';

  currentLevel = level;

  // active && modeler.prepend(breadcrumbs);
})

on('navigation-change', type => {
  active = (type === 'breadcrumbs-cockpit' || type === 'breadcrumbs-cockpit-button');
  // if(active ) {
  //   crumbsRoot.remove();
  // }
  // else {
  //   breadcrumbs.remove();
  // }
})