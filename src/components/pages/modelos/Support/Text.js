import React from 'react';
export default class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} className='col-12' value={this.state.text} placeholder="Nome do produto depois o preço"/>
            <button hidden>Definir</button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const newItem = {
        text: this.state.text,
        id: Date.now()
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
  }
  
  class TodoList extends React.Component {
    render() {
      return (
        <>
          {this.props.items.map(item => (
            <p className='fw-light' key={item.id}>{item.text}</p>
          ))}
      </>
      );
    }
  }