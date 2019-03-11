import React from 'react';

class GroceryForm extends React.Component {
  state = { name: '' }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.name)
    // debugger
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
    // debugger    
  }


  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          value={name} 
          name="name"
          onChange={this.handleChange}
          required
          placeholder="Add An Item" 
        />
      </form>
    )
  }
}

export default GroceryForm;