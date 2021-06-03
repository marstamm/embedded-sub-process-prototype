import { fire, on } from "../shared/util/eventBus.js";
import { applyCss, createElement } from "../shared/util/util.js";

const template = `
<ul class="nested active">
  <li class="expand">
    <span class="open" process="0">Order Workflow</span>
    <ul class="nested active">
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

on('open', level => {
  document.querySelectorAll("[process]").forEach(el => {
    if(el.getAttribute('process') == level) {
      applyCss(el, {
        color: 'black'
      });
    } else {
      applyCss(el, {
        color: 'inherit'
      })
    }
  })
});

const element = createElement(template);

element.querySelectorAll('.caret').forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentElement.querySelector('.nested').classList.toggle("active");
    toggle.classList.toggle("rotate");
  });
});

element.querySelectorAll('.open').forEach(link => {
  link.addEventListener("click", () => {
    fire('open', link.getAttribute('process'));

    const parent = link.parentElement;

    if(parent.classList.contains('expand')) {
      parent.querySelector('.nested').classList.add("active");
      parent.querySelector('.caret').classList.add("rotate");
    }
  });
});


const style = {
  position: 'absolute',
  top: '15px',
  color: 'dodgerblue',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  left: '125px',
  border: '1px solid black',
  paddingLeft: '30px',
  minWidth: "300px",
  maxWidth: "300px",
  maxHeight: "500px",
  overflow: "auto",
  whiteSpace: "nowrap",
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingRight: '10px'

}
applyCss(element, style);

document.body.appendChild(element);