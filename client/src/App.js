import React, { Component } from "react"
import { DragDropContext } from "react-beautiful-dnd"

// internal components
import Ideas from "./pages/mainView/Ideas"
import Plans from "./pages/mainView/Plans"
import {getItems} from "./utils/draggableUtils"

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

class App extends Component {
  state = {
    items: getItems(2),
    selected: getItems(5, 10)
  };

  /**
    * A semi-generic way to handle multiple lists. Matches
    * the IDs of the droppable container to the names of the
    * source arrays stored in the state.
    */
  id2List = {
      droppable: 'items',
      droppable2: 'selected'
  };

  getList = id => this.state[this.id2List[id]];
  
  onDragEnd = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )

      let state = { items }

      if (source.droppableId === "droppable2") {
        state = { selected: items }
      }

      this.setState(state)
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      )

      this.setState({
        items: result.droppable,
        selected: result.droppable2
      })
    }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Ideas items={this.state.items}/>
        <Plans items={this.state.selected}/>
      </DragDropContext>
    )
  }
}

export default App
