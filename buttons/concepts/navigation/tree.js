import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";

let active = false;

const createTree = (level) => {
  const template = level < 10 ? `<ul class="nested">
  <li class='single'>Empty</li>
  <li class='expand'><span class="caret"></span><span class="open">Level ${level}</span>
</ul>` : `<ul class="nested"><li class='single'>A very long Process Name</li></ul>`

  let child = createElement(template);

  const single = child.querySelector('.single')
  single?.addEventListener('click', () => {
    fire('open', level, false);
  });

  let expand = child.querySelector('.expand')
  if(expand) {
    expand.querySelector('.caret').addEventListener("click", () => {
      expand.querySelector('.nested').classList.toggle("active");
    });

    expand.querySelector('.open').addEventListener("click", () => {
      fire('open', level);
    });

    expand.appendChild(createTree(level + 1));
  }

  return child;
}

let element = createTree(0);
console.log(element);

element.classList.add('active');
const style = {
  display: 'none',
  position: 'absolute',
  top: '150px',
  color: 'blue',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  left: '60px',
  border: '1px solid black',
  paddingLeft: '30px',
  maxWidth: "250px",
  maxHeight: "500px",
  overflow: "auto",
  whiteSpace: "nowrap"

}
applyCss(element, style);

on('navigation-change', type => {
  active = type === 'tree';
  element.style.display = active ? "" : "none";
  diagram_container.style.marginLeft = active ? "200px" : "";
})
document.body.appendChild(element);