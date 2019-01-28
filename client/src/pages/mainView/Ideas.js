import React, { Component } from "react"
import { Droppable, Draggable } from "react-beautiful-dnd"
import { Container, Card } from "semantic-ui-react"

//internal components
// import FixedCard from "../../components/FixedCard"
import { getListStyle, getItemStyle } from "../../utils/draggableUtils"

class Ideas extends Component {
  
  render () {
    const { items } = this.props

    return (
      <Container isFluid style={{ marginTop: 10 }}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}>
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
                          <Card.Header>{item.id}</Card.Header>
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
          )}
        </Droppable>
      </Container>
    )
  }
}

export default Ideas
