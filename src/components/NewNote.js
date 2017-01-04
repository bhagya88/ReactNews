import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addNewNote } from '../actions/articles_actions';

class NewNote extends Component {

  constructor(props) {
  super(props);
  this.state = {
    text: ''
    };
  }

  componentWillRecieveProps(){
    
    this.setState({ text: ''});

  }

  handleChange(e){

    this.setState({ [e.target.name] : e.target.value})

  }

  handleSubmit(e){

    if(this.state.text.length){

      this.props.addNewNote(this.props.article._id, this.state.text)
    }

    this.setState({ text: ''});
  }


  render() {
    
  return (
 	<div className="card transparent center">
                  <form id="noteForm" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="card-content note-card ">
                    <span className="card-title activator white-text text-darken-4">New Note</span>
                    <input type="text" id="content" value={ this.state.text } onChange={this.handleChange.bind(this)} name="text"  className="cursiveFont" />

                  </div>
                  <div className="card-image waves-effect waves-block waves-light center light-blue darken-4">
                   <i id="save" type="submit" className="material-icons small" onClick={this.handleSubmit.bind(this)}>save</i>
                  </div>
                  </form>
     </div>
    );
  }
}

NewNote.propTypes = {

  article: React.PropTypes.object
 
}

function mapStateToProps(state){
  return {
    article: state.articles[state.current]
  }
}


export default connect(mapStateToProps,{ addNewNote })(NewNote);