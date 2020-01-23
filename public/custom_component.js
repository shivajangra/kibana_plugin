
import React, { Component } from 'react';
 
class CustomComponent extends Component {
 
  shouldComponentUpdate(props) {
    const shouldUpdate = props.html !== this.props.html;
 
    if (!shouldUpdate) {
      this.props.renderComplete();
    }

    return shouldUpdate;
  }
 
  componentDidMount() {
    this.props.renderComplete();
  }
 
  componentDidUpdate() {
    this.props.renderComplete();
  }
 
  render() {
    return (
      <div className="html-vis">
        <div dangerouslySetInnerHTML={{__html: this.props.html}} />
      </div>
    );
  }
}
 
export function HtmlVisWrapper(props) {
  return (
    <CustomComponent
      html={props.vis.params.html}
      renderComplete={props.renderComplete}
    />
  );
}