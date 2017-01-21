import React, { Component } from 'react';
import SavedNotes from './SavedNotes';
import NewNote from './NewNote';
import {connect} from 'react-redux';
import { getArticles } from '../actions/articles_actions';
import { next, previous } from '../actions/current_actions';

class ArticleComponent extends Component {

  componentDidMount(){
   console.log("AC com did mount");
   this.props.getArticles();
  }



  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="row"><h4 className="center">REACT NEWS</h4> </div>
              <div className="col s3">
                <NewNote current={this.props.current}/>
                </div>


            <div className="col s6">
              <div className="card transparent center">
                  
                  <div className="card-content article-card">
                    <p><span className="card-title activator white-text text-darken-4 center">|| Article <span id="articleNum"></span>||</span></p>
                    
                    { this.props.articles.length ? <p id="title" className="center">{this.props.articles[this.props.current].title } </p> : <span/> }
                
                    <p><a id="link" className="center"></a></p>
                   

                  </div>
                  <div className="card-image  center light-blue darken-4">
                   <i onClick={this.props.previous.bind(null, this.props.articles )}  className="material-icons small waves-effect waves-block waves-light rotate180">label</i>
                   <i onClick={this.props.next.bind(null, this.props.articles )}  className="material-icons small waves-effect waves-block waves-light">label</i>
                  </div>
              </div>
            </div>

            <div className="col s3">
              <SavedNotes />
             
            </div>
              
            </div>
            
          </div>
          
        </div>

    
    );
  }
}


ArticleComponent.propTypes = {

  articles: React.PropTypes.array.isRequired,
  current: React.PropTypes.number.isRequired,
  getArticles: React.PropTypes.func.isRequired,
  next: React.PropTypes.func.isRequired,
  previous: React.PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return {
    articles: state.articles,
    current: state.current
  }
}

export default connect(mapStateToProps,{ getArticles, next, previous })(ArticleComponent);
