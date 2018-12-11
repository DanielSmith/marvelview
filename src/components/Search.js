import React from 'react';

class Search extends React.Component {
  state = { searchTerm: '' };

  formSubmit = (event) => {
    event.preventDefault();

    this.props.searchCallback(this.state.searchTerm);
  };

  onChange = (event) => {
    this.setState( { searchTerm: event.target.value });
  };


  render() {
    return (
      <div className="ui labeled input">
        <form onSubmit={this.formSubmit}>
          <div className="ui huge icon input">
            <input type="text"
              placeholder="Search Marvel Comics..."
              value={this.state.searchTerm}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;