import react, { Component} from 'react'


export default class PrevArrow extends Component {
  render(){
    return(
      <IconButton className="slickArrowPrev" onClick={this.props.onClick} iconClassName="fa fa-chevron-circle-left" />
    )
  }
 }
