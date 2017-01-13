import React, { Component } from 'react';

import {connect} from 'react-redux';
import { delNote, delAllNotes } from '../actions/articles_actions';

class SavedNotes extends Component {


  handleDeleteAllNotes(){

    if(this.props.article.notes.length){
      this.props.delAllNotes(this.props.article._id);
    }
 

  }


  render() {
  	var notes = [];
    if(this.props.article && this.props.article.notes.length){
      notes = this.props.article.notes.map(function(ele,i){
      return  (<p id="note" className="left cursiveFont center" key={i}  >{ele} <button className="btn-flat transparent white-text"  onClick={this.props.delNote.bind(null, this.props.article._id, i)} ><span> &times; </span></button></p>)
      },this);
    
    }

    
    return (
     <div className="card transparent ">
                  
                  <div className="card-content note-card center">
                    <p className="card-title activator white-text text-darken-4 center">Saved Notes</p>
                    { notes.length ? notes : <span/>}

                  </div>
                  <div className="card-image waves-effect waves-block waves-light center light-blue darken-4">
                   <i id="delete" onClick={this.handleDeleteAllNotes.bind(this)} className="material-icons small">delete</i>
                  </div>
      </div>
    );
  }
}

SavedNotes.propTypes = {

  article: React.PropTypes.object,
  current: React.PropTypes.number.isRequired,
  delAllNotes: React.PropTypes.func.isRequired,
  delNote: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    article: state.articles[state.current],
    current: state.current
  }
}



export default connect(mapStateToProps,{ delAllNotes, delNote })(SavedNotes);
