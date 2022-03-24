import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScreenCapture from './ScreenCapture';

const link = 'http://giaothong.hochiminhcity.gov.vn:8007/Render/CameraHandler.ashx?id=5d9ddf49766c880017188ca0&bg=black&w=300&h=230&t=1583674013'
class App extends Component {
  state = {
    name: 'GAMO',
    screenCapture: ''
  }

  handleScreenCapture = (screenCapture) => {
    this.setState({
      screenCapture
    })
  }
  render() {
    return (
      <div className="App">
        <ScreenCapture onEndCapture={this.handleScreenCapture}>
          {({ onStartCapture }) => (
            <Fragment>
              <img src={link} />
              <button onClick={onStartCapture}>Capture</button>
            </Fragment>
          )}
        </ScreenCapture>
        <div className='img-ref'>
          <img src={this.state.screenCapture} />
        </div>
      </div>
    );
  }
}

export default App;
