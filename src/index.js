import React from 'react'
import ReactDOM from 'react-dom'

//const App = () => {
//  const course = 'Half Stack application development'
//  const part1 = 'Fundamentals of React'
//  const exercises1 = 10
//  const part2 = 'Using props to pass data'
//  const exercises2 = 7
//  const part3 = 'State of a component'
//  const exercises3 = 14

//  return (
//    <div>
//      <h1>{course}</h1>
//      <p>
//        {part1} {exercises1}
//      </p>
//      <p>
//        {part2} {exercises2}
//      </p>
//      <p>
//        {part3} {exercises3}
//      </p>
//      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//    </div>
//  )
//}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  const Header = () => {
    return (
      <div>
          {course}
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
      <Part text={part1} ejercicios={exercises1}/>
      <Part text={part2} ejercicios={exercises2}/>
      <Part text={part3} ejercicios={exercises3}/>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>part -- {props.text} -- ejercicios -- {props.ejercicios}</p>
      </div>
    )
  }

  const Total = () => {
    return (
      <div>
        
      </div>
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content  />
      <Total  />
    </div>
  )
}







ReactDOM.render(<App />, document.getElementById('root'))