import processMap from "../../../breadcrumbs/concepts/processMap.js";
import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";
import template from "./cockpit_tree_template.js"


let active = false;

const element = createElement(template);

const findProcessByName = name => {
  for (const [key, value] of Object.entries(processMap)) {
    if(name == value.name) {
      return key;
    }
  }
}


element.querySelectorAll('[ng-click="toggleOpen()"]').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.parentElement.parentElement.querySelector('ul').classList.toggle("active");
  });

  const link = toggle.parentElement.querySelector('a');
  console.log(link);
  applyCss(link, {cursor: "pointer"});
  link.addEventListener('click', () => {
    
    fire('open', findProcessByName(link.getAttribute('uib-tooltip')));
  })
});


// element.querySelectorAll('.open').forEach(link => {
//   link.addEventListener("click", () => {
//     fire('open', link.getAttribute('process'));
//   })
// });


// const style = {
//   display: 'none',
//   position: 'absolute',
//   top: '100px',
//   left: '300px',
//   color: 'blue',
//   backgroundColor: 'rgba(255, 255, 255, 0.5)',
//   cursor: 'pointer',
//   border: '1px solid black',
//   paddingLeft: '30px',
//   maxWidth: "250px",
//   maxHeight: "500px",
//   overflow: "auto",
//   whiteSpace: "nowrap"

// }
// applyCss(element, style);

on('open', () => {
  diagram_container.style.marginLeft = active ? "200px" : "";
});

on('navigation-change', type => {
  active = type === 'cockpit-tree';
  element.style.display = active ? "" : "none";

  console.log(active);

  if(active) {
    let sidebar = document.querySelector('.left');
    sidebar.innerHTML = `<img id="sidebar" src="resources/sidebar_left_small.png" />`;
    sidebar.appendChild(element);
  }
  else {
    let sidebar = document.querySelector('.left');
    sidebar.innerHTML = `<img id="sidebar" src="resources/sidebar_left.png" />`;
  }
});
// document.body.appendChild(element);