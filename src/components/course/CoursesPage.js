import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);    
    //initialise local state
    this.state = { 
      course : {title : ""}
      };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

onClickSave(){
  // dispatch a predeifned actions in  '../../actions/courseActions'
  this.props.dispatch(courseActions.createCourseSuccess(this.state.courses));
}

onTitleChange(event){
  const course = this.state.course;
  course.title = event.target.value;
  this.setState({course : course});
}

 courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
       <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
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

//valiation
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

//connect function is used to create Component that interact with redux
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);

