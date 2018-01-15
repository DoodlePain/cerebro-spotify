import React, {Component} from 'react'
import '../general.css'

class Item extends Component {
  // const list = "<h2>Ciao</h2>"
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="item" onClick={() => {
        window.location.href = this.props.content.uri;
        actions.hideWindow()
      }}>
      <h6>
        {this.props.content.complete}
      </h6>

    </div>)
  }
}

export default Item;
