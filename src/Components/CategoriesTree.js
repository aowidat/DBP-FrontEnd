import React, { useEffect, useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

function CategoriesTree() {
  const [cat, setCat] = useState();
  useEffect(() => {
    fetch(`http://localhost:8080/category/getTree`)
      .then((res) => res.json())
      .then((data) => setCat(data));
  }, []);
  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id.toString()} label={nodes.name}>
      {Array.isArray(nodes.children) && nodes.children.length > 0
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  return (
    <TreeView
      aria-label="controlled"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {cat &&
        (() => {
          let td = [];
          for (let i = 0; i < cat.length; i++) {
            td.push(renderTree(cat[i]));
            td.push(<br key={Math.random()} />);
          }
          return td;
        })()}
    </TreeView>
  );
}
export default CategoriesTree;
