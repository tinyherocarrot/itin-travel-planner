import React, { Component } from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { Divider } from "semantic-ui-react"

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
  // source arrays eventually live in Redux store
  state = {
    ideas: getItems(2),
    plans1: getItems(5, 5),
    plans2: getItems(5, 10),
    plans3: getItems(5, 15)
  };

  /**
    * A semi-generic way to handle multiple lists. Matches
    * the IDs of the droppable container to the names of the
    * source arrays stored in the state.
    */
  id2List = {
      droppable: 'ideas',
      droppable2: 'plans1',
      droppable3: 'plans2',
      droppable4: 'plans3'
  };

  getList = id => this.state[this.id2List[id]];
  
  //FIXME: rewrite to allow for many lists
  onDragEnd = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    // dropped in the same list
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )

      this.setState(
        { [this.id2List[source.droppableId]]: items }
      )

    } else {

      // dropped in a different list
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      )
      const newState = {
        [this.id2List[source.droppableId]]: result[source.droppableId],
        [this.id2List[destination.droppableId]]: result[destination.droppableId]
      }
      // debugger
      this.setState(newState)
    }
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    const { ideas, plans1, plans2, plans3 } = this.state
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Ideas items={ideas}/>
        <Divider/>
        <Plans items={{ plans1, plans2, plans3 }}/>
      </DragDropContext>
    )
  }
}

export default App
