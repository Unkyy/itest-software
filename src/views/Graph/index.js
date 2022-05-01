import React, { Fragment, useState } from "react";
import { Graph } from "react-d3-graph";

import Modal from "Components/Modal";

const number = 50;
const data = {
  nodes: [
    ...[...new Array(number)].map((item, i) => {
      return {
        id: "karim" + i
      };
    })
  ],
  links: [
    ...[...new Array(number)].map((item, i) => {
      const start = i % 4;
      const end = i;
      return {
        source: "karim" + start,
        target: "karim" + end
      };
    }),
    { source: "karim0", target: "karim3" }
    // { source: "Harry", target: "Alice" },
    // { source: "Alice", target: "Sally" }
  ]
};

const myConfig = {
  automaticRearrangeAfterDropNode: false,
  collapsible: true,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  freezeAllDragEvents: false,
  // height: 800,
  highlightDegree: 2,
  highlightOpacity: 0.2,
  linkHighlightBehavior: true,
  maxZoom: 12,
  minZoom: 0.05,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  // width: 1200,
  node: {
    color: "lightgreen",
    size: 1500,
    labelProperty: "id",
    highlightStrokeColor: "blue",
    highlightStrokeWidth: 1.5
  },
  d3: {
    // alphaTarget: 0.05,
    // gravity: -250,
    // linkLength: 120,
    // linkStrength: 2,
    // disableLinkForce: true
  },
  link: {
    // type: "CURVE_SMOOTH",
    highlightColor: "lightblue"
  }
};

const AppGraph = () => {
  const [currentElement, setCurrentElement] = useState("");
  const onClickNode = (id) => {
    setCurrentElement(id);
  };
  const onClickLink = function (source, target) {
    window.alert(`Clicked link between ${source} and ${target}`);
  };
  return (
    <div className="App">
      <Graph
        id="graph-id"
        data={data}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
        config={myConfig}
      />
      {currentElement !== "" && <Modal>{currentElement}</Modal>}
    </div>
  );
};
export default AppGraph;
