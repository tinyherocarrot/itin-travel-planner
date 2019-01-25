// import React, { Component } from "react"
import styled from "styled-components"
import { Card } from "bloomer"

const grid = 8

const FixedCard = styled(Card)`
  userSelect: "none";
  padding: grid * 2;
  margin: 0 ${grid}px ${grid}px 0;

  background: ${props => props.isdragging ? "lightgreen" : "grey"};

  width: 150px;
  height: auto;
  border-radius: 2px;

  ...draggableStyle
`

export default FixedCard
