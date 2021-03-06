import React, { Component } from 'react';
import "../../App.css";
import Createideaform from "./Createidea_form";
import Insertidea from "./actions";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getUser } from "../../store/profile/selectors"

class Createidea extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ideasub:false,
      ideafirsttime:true
    };
  }

  submit = values => {
    // print the form values to the console

      Insertidea(values,this.props.user.id_user)
      .then((response) =>
      this.setState({
        ideasub: response,
        ideafirsttime: false
      }));
  }

  render() {
    return (
      <div>
      {this.state.ideafirsttime &&
        <Createideaform onSubmit={this.submit} />
      }

      {this.state.ideafirsttime === false && this.state.ideasub &&
        <div className="feedbacks">
        <div className="feedback_baseline"> Your idea has been successfully created!!!! </div>
        <Link to="/viewideas" style={{ textDecoration: 'none' }}>
        <button className="btn dashboard_button">View Ideas</button>
        </Link>
        </div>
      }
      {this.state.ideafirsttime === false && this.state.ideasub === false &&
        <div className="feedbacks">
        <div className="feedback_baseline"> Sorry we receive an error please try again later... </div>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <button className="btn dashboard_button">Dashboard</button>
        </Link>
        </div>
      }
    </div>
    );
  }
}

export default connect(getUser)(Createidea);
