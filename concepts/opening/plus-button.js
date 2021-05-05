import { fire, on } from "../eventBus.js";
import { applyCss } from "../util.js";


const init = (level) => {
  document.querySelectorAll('[data-marker="sub-process"]').forEach(marker => {
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
      console.log('leave');
      highlight.remove();
    });

    marker.addEventListener('click', async event => {
      // await openDiagram(`./resources/child${level + 1}.svg`);
      highlight.remove();
      fire('open', level + 1);
    });
  })
}

on('init', () => init(0));
on('open', level => init(level));
