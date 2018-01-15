import React, {Component} from 'react'
import Item from './item'
import '../index.css'

class Preview extends Component {
  // const list = "<h2>Ciao</h2>"
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
    // this.props.searchResult.map((item) => {
    //   console.log("[Preview.js] item show: ", item);
    //    let count = this.state.counter + 1
    //    this.setState({counter: count})
    //    list = [
    //      ...list,
    //      "<h2>" + item.complete + "/<h2> </br>"
    //    ]
    //
    // })

    var wrapper = {
      'margin-top': '-30px',
      'margin-left': '-5px',
      height: '90%',
      'padding-left': '5px'
    }
    return (<ul className="wrapper" style={wrapper}>

      {list}
    </ul>)
  }
}

export default Preview;
