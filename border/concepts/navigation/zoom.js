import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";
import { applyCss } from "../util.js";


on('open', level => {
  if(level != 0) {
    applyCss(diagram_container, {
      border: '5px solid black',
      borderRadius: '50px',
      padding: "150px",
      width: 800,
      height: 300
    });

    const button = document.createElement('button');
    button.innerText = "-";
    button.contentEditable = false;

    // div.querySelector('text tspan').innerHTML = processMap[level]?.name;
    // console.log(div.querySelector('text tspan'));
    button.addEventListener('click', () => {
      fire('open', processMap[level]?.parent);
    });

    // div.appendChild(button);
    applyCss(button, {
      position: 'absolute',
      bottom: '5px',
      left: 'calc(50% - 25px)',
      fontSize: '40',
      width: '50px',
      height: '50px',
      background: 'white',
      border: '5px solid black',
      verticalAlign: 'middle',
      lineHeight: '30px',
    });

    diagram_container.appendChild(button);
    return;
  }

  applyCss(diagram_container, {
    border: '',
    borderRadius: '50px'
  });

  applyCss(diagram_container, {
    padding: ""
  });
});
