import React, { Component } from 'react'
import QuestionTable from '../questions/QuestionTable';

class AddQuestionForm extends Component {

  state = {
    qustndta: []
  }

  componentDidMount() {
    this.getQuestionDataAndUpdateSteate();
  }

  getQuestionDataAndUpdateSteate(){
    fetch('https://tranquil-crag-02324.herokuapp.com/api/v1/questions/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ qustndta: data.data })
    })
    .catch(console.log);
  }

  render() {
    return (
      <div className="context">
        <div className = "left-side">
          <form
            onSubmit={event => {
              event.preventDefault();
              const form = event.target;
              const data = new FormData(form);
              console.log('form submission data-01', data);
              fetch('https://tranquil-crag-02324.herokuapp.com/api/v1/questions/', {
                method: 'POST',
                body: data,
              }).then((data) => {
                if(data.status===200){
                  form.reset();
                  this.getQuestionDataAndUpdateSteate();
                }else{
                  alert("System Could not save data.");
                }
              });
            }}
          >
          <label>Pri</label><br/>
          <input type="text" name="pri"  /><br/>
          <label>Quiz</label><br/>
          <input type="text" name="quiz"  /><br/>
          <label>Teaming Stages</label><br/>
          <input type="text" name="teamingStages"  /><br/>
          <label>Appears Day</label><br/>
          <input type="text" name="appearsDay"  /><br/>
          <label>Frequency</label><br/>
          <input type="text" name="frequency" id="aaa" /><br/>
          <label>QType</label><br/>
          <input type="text" name="qType"  /><br/>
          <label>Conditions</label><br/>
          <input type="text" name="conditions"  /><br/>
          <label>Required</label><br/>
          <input type="text" name="required"  /><br/>
          <label>Role</label><br/>
          <select name="role_id" >
            {this.props.roles.map(role => (
              <option value={role.id}>{role.role_str}</option>
            ))};
          </select><br/>
          <label>Mapping</label><br/>
          <select name="mapping_id" >
            {this.props.mappings.map(mapping => (
              <option value={mapping.id}>{mapping.mapping_str}</option>
            ))};
          </select><br/>
          <br/>
          <button>Add new question</button>
        </form>
      </div>
      <div className = "right-side"><QuestionTable questions={this.state.qustndta} mappings={this.props.mappings} roles={this.props.roles} id="questiontable"/></div>
    </div>
    )
 }
}

export default AddQuestionForm