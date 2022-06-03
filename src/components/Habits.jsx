import React, { Component } from "react";
import Habit from "./Habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Runnning", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // console.log(`handleIncrement ${habit.name}`);
    // 리액트에서 state를 직접적으로 수정하는 것은 좋지 않기 때문에 복사해서 전달! (Spread Operator)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({habits});
  };

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // -1이 되지 않도록 설정하는 방법
    const count = habits[index].count -1;
    habits[index].count = count < 0? 0 : count;
    this.setState({habits:habits});
  };

  handleDelete = (habit) => {
    // console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter(item => item.id !== habit.id);
    this.setState({habits})
  };
  habit;
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
