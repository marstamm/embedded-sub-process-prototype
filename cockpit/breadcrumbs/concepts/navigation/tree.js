import { fire, on } from "../eventBus.js";
import { applyCss, createElement } from "../util.js";

let active = false;

const template = `
<ul class="nested active">
  <li class="expand">
    <span class="caret"></span>
    <span class="open" process="0">Order Workflow</span>
    <ul class="nested">
      <li class="expand">
        <span class="caret"></span>
        <span class="open" process="existingEmbeddedProcess">Prepare Articles</span>
        <ul class="nested">
          <li class="open" process="external_supplier">Call External Supplier</li>
        </ul>
      </li>
      <li class="expand">
        <span class="caret"></span>
        <span class="open" process="procurePayment">Procure Payment</span>
        <ul class="nested">
          <li class="open" process="charge_card">Charge Card</li>
          <li class="open" process="accounting">Accounting Stuff, I don't know</li>
        </ul>
      </li>
      <li class="open" process="Activity_1b7wgec">Ship Items (todo)</li>
    </ul>
  </li>
</ul>
`

const element = createElement(template);

element.querySelectorAll('.caret').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.querySelector('.nested').classList.toggle("active");
  });
});

element.querySelectorAll('.open').forEach(link => {
  link.addEventListener("click", () => {
    fire('open', link.getAttribute('process'));
  })
});


const style = {
  display: 'none',
  position: 'absolute',
  top: '100px',
  left: '300px',
  color: 'blue',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  border: '1px solid black',
  paddingLeft: '30px',
  maxWidth: "250px",
  maxHeight: "500px",
  overflow: "auto",
  whiteSpace: "nowrap"

}
applyCss(element, style);

on('open', () => {
  diagram_container.style.marginLeft = active ? "200px" : "";
});

on('navigation-change', type => {
  active = type === 'tree';
  element.style.display = active ? "" : "none";
  diagram_container.style.marginLeft = active ? "200px" : "";
})
document.body.appendChild(element);