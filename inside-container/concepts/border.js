import { fire, on } from "../util/eventBus.js";
import processMap from "../util/processMap.js";
import { applyCss, createElement, fetchDiagram } from "../util/util.js";

let currentLevel = 0;

const button = document.createElement('button');
button.innerText = "-";
button.contentEditable = false;

button.addEventListener('click', () => {
  fire('open', processMap[currentLevel]?.parent);
});

applyCss(button, {
  position: 'relative',
  left: 'calc(50% - 25px)',
  bottom: '5px',
  fontSize: '40',
  width: '50px',
  height: '50px',
  background: 'white',
  border: '4px solid black',
  verticalAlign: 'middle',
  lineHeight: '30px',
});


const title = document.createElement('div');
title.contentEditable = true;

applyCss(title, {
  position: 'absolute',
  top: '125px',
  left: '0',
  fontSize: '20',
  width: '100%',
  verticalAlign: 'middle',
  textAlign: 'center'
});



let arrows;
fetchDiagram('resources/sequenceFlow.svg').then(res => {
  arrows = [
    createElement(`<div>${res}</div>`),
    createElement(`<div>${res}</div>`)
  ];

  const baseStyle = {
    // display: 'inline',
    position: 'absolute',
    transform: 'scale(1.5)',
    zIndex: '-100',
    // display: 'none'
  }

  applyCss(arrows[0], {
    left: '-160px',
    top: '375px',
    ...baseStyle,
  });

  applyCss(arrows[1], {
    right: '-105px',
    top: '375px',
    ...baseStyle,
  });

  diagramContainer.parentElement.insertBefore(arrows[0], diagramContainer);
  diagramContainer.after(arrows[1]);
});









diagramContainer.classList.add('bordered');




on('open', level => {
  currentLevel = level;
  if(level != 0) {
    title.innerText = processMap[level]?.name;
    diagramContainer.classList.add('visible');
    diagramContainer.appendChild(button);
    diagramContainer.appendChild(title);
    applyCss(arrows[0], {
      display: 'inline'
    });
    applyCss(arrows[1], {
      display: 'inline'
    });
  } else {
    diagramContainer.classList.remove('visible');
    button.remove();
    title.remove();
    applyCss(arrows[0], {
      display: 'none'
    });
    applyCss(arrows[1], {
      display: 'none'
    });
  }
});
