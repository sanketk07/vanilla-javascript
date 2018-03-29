"use strict";

var nodes = [{
  links: [1], // node 0 is linked to node 1
  visited: false
}, {
  links: [0, 2], // node 1 is linked to node 0 and 2
  visited: false
}];

var dfs = function dfs(start) {
  var listToExplore = [start];

  nodes[start].visited = true;

  while (listToExplore.length) {
    var nodeIndex = listToExplore.pop();

    nodes[nodeIndex].links.forEach(function (childIndex) {
      if (!nodes[childIndex].visited) listToExplore.push(childIndex);
      nodes[childIndex].visited = true;
    });
  }
};

dfs(0);