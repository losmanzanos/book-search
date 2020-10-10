import React from 'react';
import './App.css';

import Search from './Components/Search/Search';
import BookList from './Components/BookList/BookList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  bookSearch = (e) => {
    e.preventDefault()
    const search = e.target.search.value
    const printType = e.target.print_type.value
    const filter = e.target.book_type.value
    const params = {
      key: 'AIzaSyB-WNnZqS6yp-O45nXiqoHBrv2xVziCodo',
      q: search
    }
    if(printType) {
      params.printType=printType
    }
    if(filter) {
      params.filter=filter
    }
    const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    const url = `https://www.googleapis.com/books/v1/volumes?` + queryString;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
    
    }

  render() {
    const page = this.state.showResults
      ? <BookList className='hidden'/>
      : <BookList books={this.state.books}/>

    return (
      <div className="App">
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <Search bookSearch={this.bookSearch}/>
        {page}
      </div>
    );
  }
}

export default App;