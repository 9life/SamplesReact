import React from 'react';

class FirePlace extends React.Component {
    constructor(props) {
      super(props);
      this.onSetFire = this.onSetFire.bind(this);
      this.onSnuffOut = this.onSnuffOut.bind(this);
      this.state = {isBurning: false};
    }
  
    onSetFire() {
      this.setState({isBurning: true});
    }
  
    onSnuffOut() {
      this.setState({isBurning: false});
    }
  
    render() {
      const isBurning = this.state.isBurning;
      
      let button = null;
      if(isBurning){
        button = <SnuffOutButton onClick={this.onSnuffOut} /> 
      } else {
        button = <SetFireButton onClick={this.onSetFire} />
      }
      return (
        <div>
          <Indicator isBurning={isBurning} />
          {button}
        </div>
      );
    }
  }
  
  function SetFireMessage(props) {
    return <h5>Камин горит!</h5>;
  }
  
  function SnuffOutMessage(props) {
    return <h5>Камин не горит</h5>;
  }
  
  function Indicator(props) {
    const isBurning = props.isBurning;
    if(isBurning){
      return <SetFireMessage />;
    }
    return <SnuffOutMessage />;
  }
  
  function SetFireButton(props) {
    return (<button className="orange" style={{backgroundColor: 'orange' }} onClick={props.onClick}>Зажечь</button>);
  }
  
  function SnuffOutButton(props) {
    return (<button className="blue" style={{backgroundColor: 'lightblue' }} onClick={props.onClick}>Потушить</button>);
  }

  export default FirePlace;