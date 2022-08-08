import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
  inputRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const habitName = this.inputRef.current.value;
    console.log(this.inputRef.current.value);
    habitName && this.props.onAdd(habitName);
    this.inputRef.current.value = '';
  };
  render() {
    console.log('habbitAddForm');
    return (
      <form className='input' onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type='text'
          className='habit-input'
          placeholder='Habit'
          // onChange={this.props.changeValue}
        />
        <button
          className='add-btn'
          // onclick={this.props.updateValue}
        >
          Add
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
