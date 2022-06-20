import React, { Component } from "react";
import Habit from "./Habit";
import HabitAddForm from "./HabitAddForm";

class Habits extends Component {
  render() {
    console.log('habits');
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className='reset-btn' onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
