/*
  A Droppable-wrapped Card component.
  TODO: make card's width a responsive value
**/

import React, { Component } from "react"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { Card } from "semantic-ui-react"
import styled from "styled-components"

class DayCard extends Component {
  render() {
    const { index, items } = this.props

    return (
      <Droppable droppableId={`droppable${index}`}>
        {(provided, snapshot) => (
          <StyledDayCard>
            <div ref={provided.innerRef} style={{ background: "lightgrey" }}>
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <Card
                        isdragging={snapshot.isDragging}
                        draggableStyle={provided.draggableProps.style}
                        style={{
                          margin: "10px"
                        }}>
                        <Card.Content>
                          <Card.Header>{item.id}</Card.Header>
                          <Card.Meta>New User</Card.Meta>
                          <Card.Description>
                            Molly wants to add you to the group{" "}
                            <strong>musicians</strong>
                          </Card.Description>
                        </Card.Content>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          </StyledDayCard>
        )}
      </Droppable>
    )
  }
}

const StyledDayCard = styled(Card).attrs({
  centered: true
})`
  padding: 8px;
`

export default DayCard
