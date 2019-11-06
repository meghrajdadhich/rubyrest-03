import React, { Component } from 'react';
import './App.css';
import QuestionTable from './questions/QuestionTable';
import AddQuestionForm from './form/AddQuestionForm';

class App extends Component {
  state = {
    rolesdata: [],
    mappingdata: []
  }
  componentDidMount() {

    fetch('https://tranquil-crag-02324.herokuapp.com/api/v1/roles/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ rolesdata: data.data })
      })
      .catch(console.log);

    fetch('https://tranquil-crag-02324.herokuapp.com/api/v1/mappings/')
      .then(res => res.json())
      .then((data) => {
        this.setState({ mappingdata: data.data })
      })
      .catch(console.log);
  }

  render() {
    return (
      <AddQuestionForm questions={this.state.questiondata} mappings={this.state.mappingdata} roles={this.state.rolesdata} />
    )
  }
}
export default App;
