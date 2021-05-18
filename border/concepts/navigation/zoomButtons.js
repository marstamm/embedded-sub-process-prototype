import { fire, on } from "../eventBus.js";
import processMap from "../processMap.js";

let currentLevel;
let zoomLevel = 1;
let zoomType;

function applyZoom() { 
  if(zoomType === "content") {
    diagram_container.querySelector('svg').style.transform = `scale(${zoomLevel})`;
  }

  if(zoomType === "all") {
    diagram_container.style.transform = `scale(${zoomLevel})`;
  }
}

zoomIn.addEventListener('click', () => {
  zoomLevel += 0.1;
  applyZoom();
});

zoomOut.addEventListener('click', () => {
  zoomLevel -= 0.1;
  applyZoom();

  if(zoomType === 'all' && zoomLevel < 0.3) {
    fire('open', processMap[currentLevel]?.parent);
  }
});

on('zoom-change', type => {
  zoomLevel = 1;
  applyZoom();
  zoomType = type;
});

on('open', level => {
  zoomLevel = 1;
  applyZoom();

  currentLevel = level;
})