

export default {
  0: {
    name: "Order Workflow",
    link: "parent.bpmn",
    parent: null
  },
  "0": {
    name: "Order Workflow",
    link: "parent.bpmn",
    parent: null
  },
  "existingEmbeddedProcess": {
    name: "Prepare Articles",
    link: "prepareArticles.bpmn",
    parent: 0
  },
  "procurePayment" : {
    name: "Procure Payment",
    link: "procurePayment.bpmn",
    parent: 0
  },
  "external_supplier": {
    name: "Call External Supplier",
    link: "leaf.bpmn",
    parent: 'existingEmbeddedProcess'
  },
  "charge_card": {
    name: "Charge Card",
    link: "leaf.bpmn",
    parent: 'procurePayment'
  },
  "accounting": {
    name: "Acounting Stuff, I don't know",
    link: "leaf.bpmn",
    parent: 'procurePayment'
  },
  "Activity_1b7wgec": {
    name: "Ship Items (todo)",
    link: "nothing.bpmn",
    parent: 0
  }
}