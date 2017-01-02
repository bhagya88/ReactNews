import React, { Component } from 'react';

class SavedNotes extends Component {
  render() {
  	var notes = [];
    if(this.props.article && this.props.article.notes.length){
      notes = this.props.article.notes.map(function(ele){
      return  (<p id="note" className="left cursiveFont">{ele}</p>)
      });
    
    }
    
    return (
     <div className="card transparent ">
                  
                  <div className="card-content note-card center">
                    <p className="card-title activator white-text text-darken-4 center">Saved Notes</p>
                    { notes.length ? notes : <span/>}

                  </div>
                  <div className="card-image waves-effect waves-block waves-light center light-blue darken-4">
                   <i id="delete" className="material-icons small">delete</i>
                  </div>
      </div>
    );
  }
}

export default SavedNotes;
