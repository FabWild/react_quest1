import React, {Component} from 'react';

class Author extends Component {

  constructor() {
    super();
    this.fonctionAuClic = this.fonctionAuClic.bind(this);
  }

  fonctionAuClic() {
    console.log('clic');
    alert(this.props.name);
  }

  render() {
    return(
      <div onClick={this.fonctionAuClic}>
      <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Author;
