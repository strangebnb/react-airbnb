import React from 'react';
require ('./profile.component.scss');


export default React.createClass({
render(){

const style = {
  color: '#bbb',
  fontSize: '13px',
  padding: '9px 24px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '66px',
  height: '36px',
  backgroundColor: '#484848',
  item: {
    padding: '10px 14px',
    fontWeight: '300px',
  },
}





  return(
          <div style={{backgroundColor: '#484848' }}>
                    <div className="profileDash" style={style}>
                    <span  >
                      <a style={style.item} href='/profile'>Dashboard</a>
                      <a style={style.item} href="/inbox" >Inbox</a>
                      <a style={style.item} href="/rooms" >Your Listings</a>
                      <a style={style.item} href="/trips/current" >Your Trips</a>
                      <a style={style.item} href="/users/edit" >Profile</a>
                      <a style={style.item} href="/users/notifications" >Account</a>
                      <a style={style.item} href="/invite" >Travel Credit</a>
                    </span>
                    </div>
      </div>
  )
}
});
