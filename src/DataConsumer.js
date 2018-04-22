import React from 'react';
import {ThemeContext} from './DataProvider';

export default class DataConsumer extends React.Component {
  render() {
    const {children} = this.props;

    return (
      <ThemeContext.Consumer>
        {({allChar, searchTerm, searchTermChanged}) => {
          const char = searchTerm
            ? allChar.filter(
                char =>
                  char.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
              )
            : allChar;

          return React.Children.map(children, child =>
            React.cloneElement(child, {
              char,
              searchTerm,
              searchTermChanged,
            })
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
