import React from 'react';
import NavBar from './NavBar';
import MainVideo from './MainVideo';
import SegmentedVideo from './SegmentedVideo';
import {connect} from 'react-redux';
import store from '../store/index';
import {loadPoem} from '../actions/poem-actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.nextPoem = this.nextPoem.bind(this);
    this.previousPoem = this.previousPoem.bind(this);
  }

  previousPoem() {
    switch (this.props.poem) {
      case 'ode_sea':
        store.dispatch(loadPoem('frog_butt'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'those_who_try':
        store.dispatch(loadPoem('ode_sea'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'zosan':
        store.dispatch(loadPoem('those_who_try'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'cuckoo_donkey':
        store.dispatch(loadPoem('zosan'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'frog_butt':
        store.dispatch(loadPoem('cuckoo_donkey'));
        document.getElementById('disable').style.display = "none";
        break;
    }
  };

  nextPoem() {
    switch (this.props.poem) {
      case 'ode_sea':
        store.dispatch(loadPoem('those_who_try'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'those_who_try':
        store.dispatch(loadPoem('zosan'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'zosan':
        store.dispatch(loadPoem('cuckoo_donkey'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'cuckoo_donkey':
        store.dispatch(loadPoem('frog_butt'));
        document.getElementById('disable').style.display = "none";
        break;
      case 'frog_butt':
        store.dispatch(loadPoem('ode_sea'));
        document.getElementById('disable').style.display = "none";
        break;
    }
  };


  render() {
    console.log(this.props);
    return (
      <div id="container">
        <div id="disable"> </div>
        <div id="game-container">

          <NavBar />

          <p className="instructions" id="instructions-1"> Tap below to listen to a poem. You can choose from a variety of languages.</p>

          <div id="video-and-buttons">

            <div id="previous-button" onClick = {this.previousPoem}> 
              <div className="button">
                &#8249;
              </div>
            </div>

            <div id="box">
              <div className="main-video-container"> 
                  <MainVideo poem={this.props.poem}/>  
              </div>
            </div>

            <div id="next-button" onClick = {this.nextPoem}>
              <div className="button">
                &#8250;
              </div>
            </div>

          </div>

          <p className="instructions" id="instructions-2"> Here is the same poem divided into four parts, but not in the correct order: </p>
          
          <SegmentedVideo />
          
          <p className="instructions" id="instructions-3"> Listen to each one and compare with the recording above. </p>
          <p className="instructions" id="instructions-4"> Drag and drop to arrange them in the correct order, from left to right. </p>

        </div>
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    poem: store.poemState.poem,
  };
};

export default connect(mapStateToProps)(App);
