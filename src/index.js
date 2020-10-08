import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  const style1 = {
    fontSize: 30
  }

  const style2 = {
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: "20px"
  }

  if (hours < 12) {
    timeOfDay = "morning"
    style1.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    style1.color = "#2E0927"
  } else {
    timeOfDay = "night"
    style1.color = "#D90000"
  }
  
  return (
    <div>
      <h1 style={style1}>Good {timeOfDay}!</h1>
      <h1 style={style2}>Good {timeOfDay}!</h1>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))