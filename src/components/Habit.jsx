import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    // console.log(this.props);
    // const habitName = this.props.habit.name; 반복적으로 할 때는 이렇게 쓰지 않고 아래와 같이 쓴다.
    const { name, count } = this.props.habit;
    console.log(`habit : ${name}`);
    return (
      <>
        <li className='habit'>
          <span className='habit-name'>{name}</span>
          <span className='habit-count'>{count}</span>
          <button
            className='habit-button habit-increase'
            onClick={this.handleIncrement}
          >
            <i className='fa-solid fa-square-plus'></i>
          </button>
          <button
            className='habit-button habit-decrease'
            onClick={this.handleDecrement}
          >
            <i className='fa-solid fa-square-minus'></i>
          </button>
          <button
            className='habit-button habit-delete'
            onClick={this.handleDelete}
          >
            <i className='fa-solid fa-trash-can'></i>
          </button>
        </li>
      </>
    );
  }
}

export default Habit;
