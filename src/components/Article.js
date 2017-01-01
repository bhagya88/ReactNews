import React, { Component } from 'react';
import './App.css';
import SavedNotes from './SavedNotes';
import NewNote from './NewNote';
import {connect} from 'react-redux';


class Article extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="row"><h4 className="center">NEWSCRAPE</h4> </div>
              <div className="col s3">
                <NewNote current ={this.props.current}/>
                </div>


            <div className="col s6">
              <div className="card transparent center">
                  
                  <div className="card-content article-card">
                    <p><span className="card-title activator white-text text-darken-4 center">|| Article <span id="articleNum"></span>||</span></p>
                    
                     <p id="title" className="center">{this.props.articles[this.props.current].content}</p>
                
                    <p><a id="link" className="center"></a></p>
                   

                  </div>
                  <div className="card-image waves-effect waves-block waves-light center light-blue darken-4">
                   <i id="next" className="material-icons small">label</i>
                  </div>
              </div>
            </div>

            <div className="col s3">
              <SavedNotes article={this.props.articles[this.props.current]} current={this.props.current}/>
             
            </div>
              
            </div>
            
          </div>
          
        </div>

    
    );
  }
}

function mapStateToProps(state){
  return {
    articles: state.articles,
    current: state.current
  }
}
export default connect(mapStateToProps)(Article);
