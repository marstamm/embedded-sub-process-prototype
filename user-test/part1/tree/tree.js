import { fire, on } from "../shared/util/eventBus.js";
import { applyCss, createElement } from "../shared/util/util.js";

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
  position: 'absolute',
  top: '15px',
  color: 'blue',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  left: '125px',
  border: '1px solid black',
  paddingLeft: '30px',
  maxWidth: "250px",
  maxHeight: "500px",
  overflow: "auto",
  whiteSpace: "nowrap"

}
applyCss(element, style);

document.body.appendChild(element);