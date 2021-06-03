// import {fetchDiagram, createElement, applyCss} from "./util/util.js"
import "../shared/index.js"
import { on } from "../shared/util/eventBus.js"
// import "../shared/breadcrumbs.js"
import "./tree.js"

on('open', () => {
  let canvas = viewer.get('canvas');

  canvas.scroll({dx: 100, dy: 100})
})