/*
  A Droppable-wrapped Card component.
  TODO: make card's width a responsive value
**/

import React, { Component } from "react"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { Card } from "semantic-ui-react"

class DayCard extends Component {
  // functionalRef = null 
  render() {
    const { index, items } = this.props

    return (
      <Droppable droppableId={`droppable${index}`}> 
        {(provided, snapshot) => (
          <Card>
            <div
              ref={provided.innerRef}
              style={{background: "lightgrey"}}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card 
                        isdragging={snapshot.isDragging}
                        draggableStyle={provided.draggableProps.style}
                      >
                        <Card.Content>
                          <Card.Header>Molly Thomas</Card.Header>
                          <Card.Meta>New User</Card.Meta>
                          <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </Card>
        )}
      </Droppable>
    )
  }
}

export default DayCard
