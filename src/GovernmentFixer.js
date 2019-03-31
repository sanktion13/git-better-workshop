import React from 'react';

class GovernmentFixer extends React.Component {
  render() {
    let msg;
    if (this.props.size != 'federal') {
      msg = "We're working on it!";
    } else {
      msg = "This size of problem is outside of scope for us right now, but it'd be cool if you can build a project that does this!";
    }
    return <div>
      <h1>Government Fixer</h1>
      <h2>Size of Government: {this.props.size}</h2>
      <p>{msg}</p>
    </div>
  }
}

export default GovernmentFixer;
