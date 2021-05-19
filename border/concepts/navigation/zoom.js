import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";
import { applyCss, fetchDiagram, createElement } from "../util.js";

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
    display: 'none'
  }

  applyCss(arrows[0], {
    left: '-160px',
    top: '375px',
    ...baseStyle,
  });

  applyCss(arrows[1], {
    right: '490px',
    top: '375px',
    ...baseStyle,
  });

  modeler.parentElement.insertBefore(arrows[0], modeler);
  modeler.after(arrows[1]);
  // modeler.prepend(arrows[0]);
  // modeler.appendChild(arrows[1]);
});


on('open', level => {
  if(level != 0) {
    applyCss(arrows[0], {
      display: 'inline'
    });

    applyCss(arrows[1], {
      display: 'inline'
    });

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

    button.addEventListener('click', () => {
      fire('open', processMap[level]?.parent);
    });

    const title = document.createElement('dic');
    title.innerText = processMap[level]?.name;
    title.contentEditable = true;

    applyCss(title, {
      position: 'absolute',
      top: '15px',
      left: '0',
      fontSize: '20',
      width: '100%',
      verticalAlign: 'middle',
      textAlign: 'center'
    });

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
    diagram_container.appendChild(title);
    return;
  }

  applyCss(arrows[0], {
    display: 'none'
  })

  applyCss(arrows[1], {
    display: 'none'
  })

  applyCss(diagram_container, {
    border: '',
    borderRadius: '50px'
  });

  applyCss(diagram_container, {
    padding: ""
  });
});
