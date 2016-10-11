import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);    
    //initialise local state
    this.state = { 
      course : {title : 'test'}
      };
  }

onClickSave(){
  alert(`Saving  ${this.state.course.title}`);
  //alert("saveing the title")
}

onTitleChange(event){
  const course = this.state.course;
  course.title = event.target.value;
  this.setState({course : course});
}

  render() {
    return (
      <div>
       <h1>Courses</h1>
       <h2>Add Courses</h2>
        <input type="text"
               onChange = {this.onTitleChange}
               value={this.state.course.title}/>
        
        <input type="submit"
               value="Save"
               onClick={this.onClickSave}/>
      </div>
    );
  }
}

export default CoursesPage;

