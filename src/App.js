import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>
        {props.course}
      </h1>
    </>
  )
}

const Part = (props) => {
  
  return (
    <>
      <p>
        {props.name} {props.exercise}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name = {props.part[0].name} exercise = {props.part[0].exercises}/>
      <Part name = {props.part[1].name} exercise = {props.part[1].exercises}/>
      <Part name = {props.part[2].name} exercise = {props.part[2].exercises}/>
    </>
  )
}

const Total = (props) => {

  return (
    <>
      <p>
        Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises} 
      </p>
    </>
  )
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    part : [
      {
        name : 'Fundamentals of React',
        exercises : 10,
      },

      {
        name : 'Using props to pass data', 
        exercises : 7,
      },

      {
        name : 'State of a component', 
        exercises : 14,
      }
    ]
  }
  return (
    <div>
      <Header course = {course.name}/>
      <Content part = {course.part}/>
      <Total part = {course.part}/>
    </div>
  )
}

export default App