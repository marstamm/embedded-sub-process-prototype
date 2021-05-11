import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";
import { applyCss } from "../util.js";


on('open', level => {
  if(level != 0) {
    return fetch('./resources/border.svg').then(async res => {
      const resSvg = await res.text();
      const div = document.createElement('div');
      div.contentEditable = true;
      div.innerHTML = resSvg;

      const button = document.createElement('button');
      button.innerText = "-";
      button.contentEditable = false;

      div.querySelector('text tspan').innerHTML = processMap[level]?.name;
      console.log(div.querySelector('text tspan'));
      button.addEventListener('click', () => {
        fire('open', processMap[level]?.parent);
      });

      div.appendChild(button);

      applyCss(button, {
        position: 'absolute',
        bottom: '35px',
        left: '50%',
        fontSize: '40',
        width: '50px',
        height: '50px',
        background: 'white',
        border: '5px solid black',
        verticalAlign: 'middle',
        lineHeight: '30px',
      });

      applyCss(div, {
        position: 'absolute',
        display: 'inline',
        width: '1200px',
        height: '720px',
        top: '120px',
        left: '80px',
      });
      applyCss(div.querySelector('svg'), {
        width: '100%',
        height: '100%'
      });
      
      applyCss(diagram_container, {
        padding: "150px"
      });

      modeler.prepend(div);
    });
  }

  applyCss(diagram_container, {
    padding: ""
  });
});
