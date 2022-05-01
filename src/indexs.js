import React, { Fragment, useState } from "react";
import { render } from "react-dom";
import { Graph } from "react-d3-graph";

import Modal from "Components/Modal";

import "./styles.css";
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
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 1500,
    labelProperty: "id",
    highlightStrokeColor: "blue"
  },
  link: {
    type: "CURVE_SMOOTH",
    highlightColor: "lightblue"
  }
};

function App() {
  const [currentElement, setCurrentElement] = useState("");
  const onClickNode = (id) => {
    setCurrentElement(id);
  };
  return (
    <div className="App">
      <Graph
        id="graph-id"
        data={data}
        onClickNode={onClickNode}
        config={myConfig}
      />
      {currentElement !== "" && <Modal>{currentElement}</Modal>}
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
