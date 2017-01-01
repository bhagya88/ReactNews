import React, { Component } from 'react';

class NewNote extends Component {
  render() {
    
    return (
 	<div className="card transparent center">
                  <form id="noteForm">
                  <div className="card-content note-card ">
                    <span className="card-title activator white-text text-darken-4">New Note</span>
                    <input type="text" id="content" name="content"  className="cursiveFont" />

                  </div>
                  <div className="card-image waves-effect waves-block waves-light center light-blue darken-4">
                   <i id="save" type="submit" className="material-icons small">save</i>
                  </div>
                  </form>
     </div>
    );
  }
}

export default NewNote;
