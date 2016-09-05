import React from 'react';

import { DateRangePicker } from 'react-dates';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }



  render() {
    const { focusedInput, startDate, endDate } = this.state;

    const selectGenerator = () =>{
      let arr = [];
      for(let i = 1; i <= 16; i++){

        let x = 0;
        if(i === 1){
          x = i + ' Guest';
        } else {
          x = i + ' Guests';
        }

        if(i == 16){
          x = x.replace('16','16+');
        }

        arr.push(x);
      }
      return arr
    }

    const roomsArray = selectGenerator();

    const roomSelection = roomsArray.map((currentVal,i)=>{
      return <option key={currentVal} value={currentVal}>{currentVal}</option>
        })

    return (
      <div className='SearchBarContainer'>
        <input className='SearchBar'></input>
        <DateRangePicker className ='DatePicker'
          {...this.props}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
        />
        <select className='selectGuest'>
          {roomSelection}
        </select>

        <button className='SearchBtn'>Search</button>

      </div>
    );
  }
}

export default SearchBar;
