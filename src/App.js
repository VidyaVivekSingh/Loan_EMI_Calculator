/* eslint-disable */
import React, { Component } from 'react';
import Toolbar from './Emi_Calculator/component/Toolbar/Toolbar'
import Sidebar from './Emi_Calculator/component/Sidebar/Sidebar'
import Backdrop from './Emi_Calculator/component/Backdrop/Backdrop'
import Input from './Emi_Calculator/component/Input/Input'
import Slider from './Emi_Calculator/component/Slider/Slider'
import './App.css';

let Data = {
  amount: 0,
  month: 0,
  interest: 0,
  emi: 0
}
class App extends Component {
  state = {
    sideDrawerOpen: false,
    amount: 0,
    month: 0,
    historyData: []
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  getInputValue1 = (value) => {
    if (value !== this.state.amount) {
      document.getElementsByClassName('form-control')[0].valueAsNumber = value;
      this.setState({ amount: value })
      if (this.state.month > 0) {
        this.getResult(value, this.state.month)
      }
    }
  }

  getInputValue2 = (value) => {
    document.getElementsByClassName('form-control')[1].valueAsNumber = value;
    this.setState({ month: value })
    if (this.state.amount > 0) {
      this.getResult(this.state.amount, value)
    }
  }

  getResult = (amount, month) => {
    fetch(`https://ftl-frontend-test.herokuapp.com/interest?amount=${amount}&numMonths=${month}`)
      .then(response => response.json())
      .then((responsejson) => {
        document.getElementsByClassName('form-control')[2].valueAsNumber = responsejson.monthlyPayment.amount;
        document.getElementsByClassName('form-control')[3].valueAsNumber = responsejson.interestRate;
        Data = {
          amount: amount,
          month: month,
          interest: responsejson.interestRate,
          emi: responsejson.monthlyPayment.amount
        };
        this.setState({
          historyData: [...this.state.historyData, Data]
        }
        )
        console.log(this.state.historyData);
      }
      )
  }

  handleClick = (data) => {
    console.log(data);  
  }

  render() {
    let backdrop;
    let amount = {
      500: 500, 1000: 1000, 1500: 1500, 2000: 2000, 2500: 2500,
      3000: 3000, 3500: 3500, 4000: 4000, 4500: 4500, 5000: 5000
    }
    let month = {
      6: 6, 8: 8, 10: 10, 12: 12, 14: 14,
      16: 16, 18: 18, 20: 20, 22: 22, 24: 24
    }
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <Sidebar handleClick={this.handleClick} categories={this.state.historyData} show={this.state.sideDrawerOpen} />

        {backdrop}
        <main style={{ marginTop: '64px', marginRight: '50px' }}>
          <br></br>
          <div className="row App-input">
            <div className="col-4">
              <p>Select your Amount</p>
            </div>
            <div className="col-8"><Input prepend='$' min={500} max={5000} step={250} placeholder='Amount' type='number' append='.00' /></div>
          </div>
          <br></br>
          <br></br>
          <div className="App-slider">
            <Slider min={500} defaultValue={500} max={5000}
              marks={amount} step={250} onChange={this.getInputValue1} />
          </div>
          <br></br>
          <br></br>
          <div className="row App-input-month">
            <div className="col-4">
              <p>Select Time Period</p>
            </div>
            <div className="col-8">
              <Input prepend='' min={6} max={24} step={2} placeholder='Month' type='number' append='' />
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="App-slider">
            <Slider min={6} defaultValue={6} max={24}
              marks={month} step={2} onChange={this.getInputValue2} />
          </div>
          <br></br>
          <br></br>
          <div className="row App-emi">
            <div className="col-4">
              <p>Calculated EMI</p>
            </div>
            <div className="col-8">
              <Input prepend='$' placeholder='EMI' type='number' append='.00' />
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="row App-interest">
            <div className="col-4">
              <p>Calculated Interest</p>
            </div>
            <div className="col-8">
              <Input prepend='%' placeholder='Interest' type='number' />
            </div>
          </div>
        </main>
      </div >
    );
  }
}

export default App;
