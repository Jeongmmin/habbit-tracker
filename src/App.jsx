import React, { Component } from "react";
import "./app.css";
import Habits from "./components/Habits";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Runnning", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleAdd = (habit) => {
    const NewHabit = {
      id: Date.now(),
      name: habit,
      count: 0,
    };
    const habits = [...this.state.habits, NewHabit];
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    // console.log(`handleIncrement ${habit.name}`);
    // 리액트에서 state를 직접적으로 수정하는 것은 좋지 않기 때문에 복사해서 전달! (Spread Operator)
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    // -1이 되지 않도록 설정하는 방법
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    // console.log(`handleDelete ${habit.name}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleResetAll = () => {
    // window.location.reload();
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    const totalCount = this.state.habits.filter(
      (item) => item.count !== 0
    ).length;
    // console.log(this.state.habits.filter((item) => item.count !== 0).length);
    // console.log(this.state.habits);

    return (
      <>
        <Navbar totalCount={totalCount} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleResetAll}
        />
      </>
    );
  }
}

export default App;
