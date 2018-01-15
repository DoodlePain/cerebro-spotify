import React, {Component} from 'react'
import '../index.css'
import Radium from 'radium'

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var item = {
      'align-items': 'center',
      'padding': '10 px',
      'list-style-type': 'none',
      cursor: 'pointer',
      'width': 'auto',
      color: '#000000',
      'font-size': '16px',
      'font-weight': 'normal',
      'text-align': 'left',
      'text-size-adjust': '100%'
    }
    var hr = {
      'color': 'grey',
      'background-color': 'grey'
    }
    if (this.props.content.complete.length > 48) {
      item.push(  
        'height': '15%'
      )
    } else {
      item = {
        'align-items': 'center',
        'padding': '10 px',
        'height': '10%',
        'list-style-type': 'none',
        cursor: 'pointer',
        'width': 'auto',
        color: '#000000',
        'font-size': '16px',
        'font-weight': 'normal',
        'text-align': 'left',
        'text-size-adjust': '100%'
      }
    }

    return (<li style={item} onClick={() => {
        window.location.href = this.props.content.uri;
        actions.hideWindow()
      }}>
      {this.props.content.complete}
      <hr style={hr}/>
    </li>)
  }
}

export default Item;
