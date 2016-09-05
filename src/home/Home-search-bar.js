import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import moment from 'moment';

import SearchBar from '../date-range-picker/SearchBar.jsx';
require('./_datepicker.scss');

var HomeSearchBar = React.createClass({

render(){
  return(
    <div>
      <h1>Hello Search Bar</h1>
      <SearchBar />
    </div>
    )
}

})

export default HomeSearchBar

{/* <SingleDatePicker
  id="date_input"
  date={date}
  focused={focused}
  onDateChange={this.onDateChange}
  onFocusChange={this.onFocusChange}
/> */}



{/* <DateRangePicker
  date=
/> */}
