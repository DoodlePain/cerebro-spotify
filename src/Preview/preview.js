import React, {Component} from 'react'
import Item from './item'
class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  render() {
    let list = []
    Object.keys(this.props.searchResult).map((result, index) => {
      list = [
        ...list,
        <Item content={this.props.searchResult[result]} key={index}/>
      ]
    })
    var wrapper = {
      'margin-top': '-30px',
      'margin-left': '-5px',
      height: '90%',
      'padding-left': '5px',
      'color': 'rgba(255,255,255,0.3)'
    }
    return (<ul className="wrapper" style={wrapper}>

      {list}
    </ul>)
  }
}

export default Preview;
