import React, {Component} from 'react'
import Item from './item'

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
    Object.keys(this.props.searchResult).map((result) => {
      list = [
        ...list,
        <Item content={this.props.searchResult[result]}/>
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
    return (<div className="PreviewList">
      {list}
      {/* <h2>Ciao</h2> */}
    </div>)
  }
}

export default Preview;
