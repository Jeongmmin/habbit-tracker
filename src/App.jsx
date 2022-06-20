import React, { Component } from 'react';
import './app.css';
import Habits from './components/Habits';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Runnning', count: 0 },
      { id: 3, name: 'Coding', count: 0 },
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
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    // console.log(`handleDecrement ${habit.name}`);
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
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
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    console.log('app');
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
