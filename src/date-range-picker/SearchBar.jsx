import React from 'react';
import axios from 'axios';
import moment from 'moment';

import { DateRangePicker } from 'react-dates';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: moment('2016-09-10'),
      endDate: moment('2016-09-30'),
      searchVal: 'Manila',
      numGuests: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmitSearch = this.onSubmitSearch.bind(this);
    this.onTyping = this.onTyping.bind(this);
    this.guestNumSelected = this.guestNumSelected.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    console.log('focusedInput: ',focusedInput)
    this.setState({ focusedInput });
  }

  onSubmitSearch(e) {
    console.log(this.state.startDate)
    console.log(this.state.endDate)

    axios.post('/search',{
      searchVal: this.state.searchVal,
      startDate: this.state.startDate.format('MM/DD/YYYY'),
      endDate: this.state.endDate.format('MM/DD/YYYY'),
      numGuests: this.state.numGuests,
      room_types: [],
    }).then(response =>{
      console.log('response from server: ', response)
      window.location.href = 'http://localhost:3000/searchResults.html';
    })

    e.preventDefault();
  }

  onTyping(e){
    console.log(e.target.value);
    this.setState({searchVal: e.target.value});
  }

  guestNumSelected(e){
      console.log(e.target.value);
      const x = e.target.value.match(/\d\d?/)

      this.setState({numGuests: parseInt(x[0])});
      // this.setState({})
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
      <div >
        <form className='SearchBarContainer' onSubmit={this.onSubmitSearch}>
          <input placeholder='Manila' onChange={this.onTyping} type='text' className='SearchBar'></input>
          <DateRangePicker className ='DatePicker'
            {...this.props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
          />
          <select onChange={this.guestNumSelected} className='selectGuest'>
            {roomSelection}
          </select>

          <button className='SearchBtn'>Search</button>
        </form>

      </div>
    );
  }
}

export default SearchBar;
