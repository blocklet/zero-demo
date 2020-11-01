// index.jsx
import React from 'react';
export default class extends React.Component {
  static async getInitialProps() {
    var json = await fetch('/time').then((resp) => resp.json());
    return { time: json.time };
  }

  render() {
    return (
      <div>
        <p>This is a zero server framework blocklet demo.</p>
        <p>Current server time is {this.props.time}</p>
      </div>
    );
  }
}
