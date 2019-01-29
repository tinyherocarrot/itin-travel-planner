import React, { Component } from "react"
import { Grid } from "semantic-ui-react"

//internal components
// import FixedCard from "../../components/FixedCard"
import DayCard from "./plans/DayCard"
import { getListStyle, getItemStyle } from "../../utils/draggableUtils"

// const days = ["Monday", "Tuesday", "Wednesday"]

class Plans extends Component {
  render() {
    return (
      <Grid columns={3} divided>
        {/** 
          CREATE ONE CARD 
          MAKE IT A VERTICAL DROPPABLE
          MAP OVER SAMPLE "DAYS" arr
          EXTRACT VERT DROPPABLE CARD component (?)
        */}
        <Grid.Row>
          <Grid.Column>
            <DayCard items={this.props.items.plans1} index={2} />
          </Grid.Column>
          <Grid.Column>
            <DayCard items={this.props.items.plans2} index={3} />
          </Grid.Column>
          <Grid.Column>
            <DayCard items={this.props.items.plans3} index={4} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Plans
