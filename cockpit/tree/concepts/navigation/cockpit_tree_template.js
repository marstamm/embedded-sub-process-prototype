export default `
<div class="filter instance-tree">
          <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="433f76af-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-" uib-tooltip=""></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Order Workflow" class="ng-binding">
        Order Workflow
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_0ci01k9:43412482-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-sub-process" uib-tooltip="subProcess"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Ship Items (todo)" class="ng-binding">
        Ship Items (todo)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_0uavv0f:43412483-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (Event_0u...)" class="ng-binding">
        StartEvent (Event_0u...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_0v2zcuo:4340af43-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-sub-process" uib-tooltip="subProcess"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Procure Payment" class="ng-binding">
        Procure Payment
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_13nrggx:4340af46-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-sub-process" uib-tooltip="subProcess"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Charge Card" class="ng-binding">
        Charge Card
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_0jfgj4x:4340af48-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-task" uib-tooltip="task"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Task (Activity...)" class="ng-binding">
        Task (Activity...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_044a2dy:4340d659-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-end-event-none" uib-tooltip="noneEndEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="EndEvent (Event_04...)" class="ng-binding">
        EndEvent (Event_04...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_0udqzmo:4340af47-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (Event_0u...)" class="ng-binding">
        StartEvent (Event_0u...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_16d2g4y:4340d65b-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-sub-process" uib-tooltip="subProcess"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Acounting Stuff, I don't know" class="ng-binding">
        Acounting Stuff, I don't know
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_1dlqw47:4340fd6d-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-task" uib-tooltip="task"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Task (Activity...)" class="ng-binding">
        Task (Activity...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_1ajrh45:4340fd6e-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-end-event-none" uib-tooltip="noneEndEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="EndEvent (Event_1a...)" class="ng-binding">
        EndEvent (Event_1a...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_1o1f0hy:4340d65c-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (Event_1o...)" class="ng-binding">
        StartEvent (Event_1o...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_0up9nxn:4340af44-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (Event_0u...)" class="ng-binding">
        StartEvent (Event_0u...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_1cdhqbp:4340fd6f-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-end-event-none" uib-tooltip="noneEndEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="EndEvent (Event_1c...)" class="ng-binding">
        EndEvent (Event_1c...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_14mthn2:433fc4d5-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-sub-process" uib-tooltip="subProcess"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Prepare Articles" class="ng-binding">
        Prepare Articles
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_1nqdtoj:434012f9-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children selected" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-sub-process" uib-tooltip="subProcess"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Order Items" class="ng-binding">
        Order Items
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_1jde15m:43403a0c-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label has-children" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length --><button class="btn btn-link btn-control-link btn-toggle ng-scope" ng-if="node.children.length" ng-click="toggleOpen()">
        <span class="glyphicon glyphicon-menu-down" ng-class="{ 'glyphicon-menu-right' : !node.isOpen, 'glyphicon-menu-down' : node.isOpen }"></span>
      </button><!-- end ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-sub-process" uib-tooltip="subProcess"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Call External Supplier" class="ng-binding">
        Call External Supplier
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length --><ul class="list-unstyled ng-scope" ng-show="node.isOpen" ng-if="node.children.length">
    <!-- ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_0cj42f5:43403a0e-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-task" uib-tooltip="task"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Task (Activity...)" class="ng-binding">
        Task (Activity...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_0hgddwv:43403a0f-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-end-event-none" uib-tooltip="noneEndEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="EndEvent (Event_0h...)" class="ng-binding">
        EndEvent (Event_0h...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_17ei2c8:43403a0d-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (Event_17...)" class="ng-binding">
        StartEvent (Event_17...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_08c18wo:43406120-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-end-event-none" uib-tooltip="noneEndEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="EndEvent (Event_08...)" class="ng-binding">
        EndEvent (Event_08...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_12ijz4q:434012fa-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (Event_12...)" class="ng-binding">
        StartEvent (Event_12...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Activity_1ozfajh:433febe7-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-task" uib-tooltip="task"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="Check Items" class="ng-binding">
        Check Items
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_0ubx88y:433febe6-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (Event_0u...)" class="ng-binding">
        StartEvent (Event_0u...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Event_1ikxur4:43414b94-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-end-event-none" uib-tooltip="noneEndEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="EndEvent (Event_1i...)" class="ng-binding">
        EndEvent (Event_1i...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Gateway_00jkg9l:433fc4d1-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-gateway-parallel" uib-tooltip="parallelGateway"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="ParallelGateway (Gateway_...)" class="ng-binding">
        ParallelGateway (Gateway_...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Gateway_1y87u2e:43408831-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-gateway-parallel" uib-tooltip="parallelGateway"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="ParallelGateway (Gateway_...)" class="ng-binding">
        ParallelGateway (Gateway_...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="Gateway_1y87u2e:43412480-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-gateway-parallel" uib-tooltip="parallelGateway"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="ParallelGateway (Gateway_...)" class="ng-binding">
        ParallelGateway (Gateway_...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children --><li ng-repeat="child in node.children" class="ng-scope">
      <!-- # CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
<div class="tree-node ng-scope">

  <div id="StartEvent_1:433f9dc0-b173-11eb-b073-0242ac110002" ng-class="{ 'state-running': !node.endTime, 'state-completed' : node.endTime &amp;&amp; !node.canceled, 'state-canceled': node.endTime &amp;&amp; node.canceled }" class="tree-node-group state-completed">

    <span class="tree-node-label" ng-class="{ 'selected' : node.isSelected, 'has-children': node.children.length }">

      <!-- ngIf: node.children.length -->

      <button class="btn btn-link btn-control-link btn-control remove" ng-click="deselect($event)">
        <span class="glyphicon glyphicon-remove"></span>
      </button>

      <span class="icon-start-event-none" uib-tooltip="startEvent"></span>

      <a ng-click="select($event)" tooltip-placement="right" uib-tooltip="StartEvent (StartEve...)" class="ng-binding">
        StartEvent (StartEve...)
      </a>

    </span>

    <!-- running -->
    <!-- ngIf: !node.endTime -->

    <!-- completed -->
    <!-- ngIf: node.endTime && !node.canceled --><span ng-if="node.endTime &amp;&amp; !node.canceled" class="tree-node-addon activity-instance-completed ng-scope" uib-tooltip="Completed Activity Instance" tooltip-placement="right">
      <span class="glyphicon glyphicon-ok-circle"></span>
    </span><!-- end ngIf: node.endTime && !node.canceled -->

    <!-- canceled -->
    <!-- ngIf: node.endTime && node.canceled -->

  </div>

  <!-- ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
    </li><!-- end ngRepeat: child in node.children -->
  </ul><!-- end ngIf: node.children.length -->
</div>
<!-- / CE - camunda-cockpit-ui/client/scripts/directives/activity-instance-tree.html -->
        </div>
`