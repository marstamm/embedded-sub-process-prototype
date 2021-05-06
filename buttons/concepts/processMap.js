

export default {
  0: {
    name: "Order Workflow",
    link: "parent.svg",
    parent: null
  },
  "existingEmbeddedProcess": {
    name: "Prepare Articles",
    link: "prepareArticles.svg",
    parent: 0
  },
  "procurePayment" : {
    name: "Procure Payment",
    link: "procurePayment.svg",
    parent: 0
  },
  "external_supplier": {
    name: "Call External Supplier",
    link: "leaf.svg",
    parent: 'existingEmbeddedProcess'
  },
  "charge_card": {
    name: "Charge Card",
    link: "leaf.svg",
    parent: 'procurePayment'
  },
  "accounting": {
    name: "Acounting Stuff, I don't know",
    link: "leaf.svg",
    parent: 'procurePayment'
  },
  "Activity_1b7wgec": {
    name: "Ship Items (todo)",
    link: "nothing.svg",
    parent: 0
  }
}