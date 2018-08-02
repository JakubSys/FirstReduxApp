import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
          <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
            </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapeStateToProps(state) {
  return {
    books: state.books,
  };
}
//Anything returned will end up as props on the booklist container
function mapDispatchToProps(dispatch){
  // whenever selectBook is called, the result should be passed to al of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// promote booklist from a component to a container it needs to know about this new dispatch medthod, selectbook. Make it available as a prop
export default connect(mapeStateToProps, mapDispatchToProps)(BookList);
