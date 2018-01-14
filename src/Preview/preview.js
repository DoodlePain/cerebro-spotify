import React, {Component} from 'react'

class Preview extends Component {
  // const list = "<h2>Ciao</h2>"
  constructor(props) {
    super(props);
  }

  render() {
    let list = []
    this.props.searchResult.map((item) => {
      console.log(item);
      list = [
        ...list,
        "<h2>" + item.complete + "/<h2>"
      ]

    })
    return (<div className="PreviewList">
      {/* {list} */}
      <h2>Ciao</h2>
    </div>)
  }
}

export default Preview;
