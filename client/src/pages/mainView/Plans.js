import React, { Component } from "react"
import { Container, Card } from "semantic-ui-react"
import { Droppable, Draggable } from "react-beautiful-dnd"

//internal components
// import FixedCard from "../../components/FixedCard"
import DayCard from "./plans/DayCard"
import { getListStyle, getItemStyle } from "../../utils/draggableUtils"

const days = ["Monday", "Tuesday", "Wednesday"]

class Plans extends Component {
  render() {
    return (
      <Container isFluid style={{ marginTop: 10 }}>
        {/** 
          CREATE ONE CARD 
          MAKE IT A VERTICAL DROPPABLE
          MAP OVER SAMPLE "DAYS" arr
          EXTRACT VERT DROPPABLE CARD component (?)
        */}
        <DayCard items={this.props.items} index={2}/>

      </Container>
    )
  }
}

export default Plans
