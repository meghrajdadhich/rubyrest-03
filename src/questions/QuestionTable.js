import React, { Component } from 'react'

class QuestionTable extends Component {
  /*componentDidUpdate(){
    if(this.props.roles.length>0){
      console.log(this.props.roles);
      alert("eeeeee"+this.props.roles.length);
    }
  }*/
  render() {
    //this.setMaps();
    return (
      <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Pri</th>
          <th>Quiz</th>
          <th>Teaming Stages</th>
          <th>Appears Day</th>
          <th>Frequency</th>
          <th>QType</th>
          <th>Role</th>
          <th>Required</th>
          <th>Conditions</th>
          <th>Mapping</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.props.questions.map(question => (
          <tr key={question.id}>
            <td>{question.id} </td>
            <td>{question.pri} </td>
            <td>{question.quiz} </td>
            <td>{question.teamingStages} </td>
            <td>{question.appearsDay} </td>
            <td>{question.frequency} </td>
            <td>{question.qType} </td>
            <td>{this.props.roles.map(role => {
              if(role.id==question.role_id) { return role.role_str}
            })}</td>
            <td>{question.required} </td>
            <td>{question.conditions} </td>
            <td>{this.props.mappings.map(mapping => {
              if(mapping.id==question.mapping_id) { return mapping.mapping_str}
            })}</td>
            <td>
              <button className="button muted-button" onClick={() => { 
                const rqst = new Request('https://tranquil-crag-02324.herokuapp.com/api/v1/questions/'+ question.id, {
                  headers: new Headers({
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                  }),
                  method: 'DELETE'
                })
                 fetch(rqst).then((response) => {
                   return response;
                 }).then((result) => {
                   window.location.reload();
                 });
                }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    )
 }
}


export default QuestionTable