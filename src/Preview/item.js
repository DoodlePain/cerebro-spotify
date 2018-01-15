import React, {Component} from 'react'
import '../index.css'
import Radium from 'radium'

class Item extends Component {
  // const list = "<h2>Ciao</h2>"
  constructor(props) {
    super(props);
  }

  render() {
    var hr = {
      'color':'grey',
      'background-color': 'grey'
    }
    var item = {
      'align-items':'center',
      'padding': '10 px',
      'height': '35px',
      'list-style-type': 'none',
      cursor: 'pointer',
      'width': 'auto',
      color: '#000000',
      'font-size':'16px',
      'font-weight':'normal',
      'text-align':'left',
      'text-size-adjust':'100%'
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
