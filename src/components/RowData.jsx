import React from 'react'
import "./Rowsty.css"
const RowData = (props) => {
  let { id, time, net_id, alert } = props;
  let user;
  
  if (alert && alert.ukey) {
    user = alert.ukey;
  } else {
    user = "Unknown user, details not fetched";
  }
  
  let action;
  if (alert && alert.category) {
    action = alert.category;
  } else {
    action = "Information is leaking";
  }
  return (
    <table className="table" >
    <thead  >
      <tr style={{
        fontFamily: 'Gill Sans Gill Sans MT Calibri Trebuchet MS sans-serif',
        fontSize: '16px', // or '1.2em'
        fontStyle: "initial",
        fontWeight: '500',
        color: "black",
      }}>
        <td className='col-1' style={{ textAlign: 'left', color:'blue' }}  >{id}</td>
        <td className='col-2'  style={{ textAlign: 'left'}} >{time}</td>
        <td className='col-2' style={{ textAlign: 'left' }} >{net_id}</td>
        <td  className='col-4' style={{ textAlign: 'left' }} >{user}</td>
        <td  className='col-3' style={{ textAlign: 'left'}} >{action}</td>
      </tr>
    </thead>
  </table>
  )
}

export default RowData
