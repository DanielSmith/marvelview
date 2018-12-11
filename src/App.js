import React, { Component } from 'react';
import './App.css';

import ComicList from './components/ComicList';
import Search from './components/Search';
import marvelapi from './apis/marvel';
import ComicDetail from './components/ComicDetail';

class App extends Component {
  state = {
    comicResults: [],
    selectedComic: null,
    searchState: ''
  }

  onSearchSubmit = async (searchTerm) => {

    // anything to search?
    if (searchTerm.trim() === '') {
      this.setState({
        searchState: ': Nothing to search....',
        selectedComic: null
      });

      return;
    }

    this.setState({
      searchState: ': Searching...',
      selectedComic: null
    });

    const response = await marvelapi.get('/comics', {
      params: {
        titleStartsWith: searchTerm,
        limit: 10
      }
    });

    this.setState( {
      comicResults: response.data.data.results,
      searchState: ''
    });
  }


  onComicSelect = (whichComic) => {
    this.setState({ selectedComic: whichComic });
  }

  // initial list
  componentDidMount = async () => {
    const response = await marvelapi.get('/comics', {
      params: {
        titleStartsWith: 'deadpool',
        limit: 5
      }
    })

    this.setState( {
      comicResults: response.data.data.results,
      searchState: ''
    });
  }


  render() {
    return (
      <div className="App">
        <div className="ui container">
          <div className="headerText">
            <header className="ui large header"> 
              <p>Welcome to MarvelView{this.state.searchState}</p>
              <Search searchCallback={this.onSearchSubmit} />
            </header>
          </div>

          <div className="ui grid">
            <div className="ui row">
              <div className="five wide column scrollMe">
                <ComicList
                  results={this.state.comicResults}
                  onComicSelect={this.onComicSelect}
                  />
              </div>

              <div className="eleven wide column">
                <ComicDetail selectedComic={this.state.selectedComic} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;