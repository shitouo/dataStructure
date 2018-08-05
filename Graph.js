/**
 * 图
 */
// 
class Graph {
  constructor (v) {
    this.vertices = v // 定点数
    this.edges = 0 // 边数
    this.adj = []
    this.visitedMark = []
    for (let i = 0; i < this.vertices; i++) {
      this.adj[i] = []
      this.visitedMark[i] = false
    }
  }
  addEdge (v, w) {
     this.adj[v].push(w)
     this.adj[w].push(v)
     this.edges++
  }
  showGraph () {
    this.adj.forEach((value, index) => {
      let adjacentVertices = ''
      value.forEach(vertice => {
        adjacentVertices += vertice
      })
      console.log(`${index} ---> ${adjacentVertices}\n`)
    })
  }
  dfs (v) {
    this.visitedMark[v] = true
    console.log(`${v}节点被访问过了`)
    for (let value of this.adj[v]) {
      if (!this.visitedMark[value]) {
        this.dfs(value)
      }
    }
  }
  bfs (v) {
    let visitedQuene = []
    this.visitedMark[v] = true
    console.log(`${v}节点被访问过了`)
    visitedQuene.push(v)
    while(visitedQuene.length > 0) {
      let preVisitedVertice = visitedQuene.shift()
      for (let value of this.adj[preVisitedVertice]) {
        if(!this.visitedMark[value]) {
          this.visitedMark[value] = true
          console.log(`${value}节点被访问过了`)
          visitedQuene.push(value)
        }
      }
    }

  }
}

let g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.bfs(0)