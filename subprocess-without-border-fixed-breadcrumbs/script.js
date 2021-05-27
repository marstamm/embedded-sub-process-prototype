// import {fetchDiagram, createElement, applyCss} from "./util/util.js"
import { fire } from "./util/eventBus.js";
import "./concepts/index.js"

// BpmnJS is the BPMN viewer instance
const viewer = new BpmnJS({ container: '#diagramContainer' });

window.viewer = viewer;

fire('open', 0);
