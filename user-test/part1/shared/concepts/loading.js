import processMap from "../util/processMap.js";
import { on } from "../util/eventBus.js";
import { fetchDiagram } from "../util/util.js";


on('open', async process => {
  const viewer = window.viewer;

  const url = '../shared/resources/' + processMap[process].link;

  const bpmnXML = await fetchDiagram(url);

  // import a BPMN 2.0 diagram
  await viewer.importXML(bpmnXML);
  viewer.get('canvas').zoom('fit-viewport');
}, 1000)

