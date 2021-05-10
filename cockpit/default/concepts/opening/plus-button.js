import { fire, on } from "../eventBus.js";
import { applyCss } from "../util.js";

let active = false;
let currentLevel = 0;

const init = (level) => {
  currentLevel = level;
  if(!active) return;

  document.querySelectorAll('[data-marker="sub-process"]').forEach((marker, index) => {
    const bounds = marker.getBoundingClientRect();
    const highlight = document.createElement('div');
    const css = {
      position: 'absolute',
      backgroundColor: "rgba(0,0,255,0.2)",
      left: bounds.x - 5,
      top: bounds.y - 5,
      width: bounds.width,
      height: bounds.height,
      padding: 5,
      pointerEvents: "none"
    }
    applyCss(highlight, css);

    marker.addEventListener('mouseenter', event => {
      console.log('enter');
      document.body.appendChild(highlight);
    });

    marker.addEventListener('mouseleave', event => {
      highlight.remove();
    });

    marker.addEventListener('click', async event => {
      highlight.remove();
      fire('open', marker.parentElement.parentElement.getAttribute('data-element-id'));
    });
  })
}

on('init', () => init(0));
on('open', level => init(level));

on('opening-change', type => {
  active = type === 'plus';
  if(active) {
    init(currentLevel);
  }
});