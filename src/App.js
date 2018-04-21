import React from 'react';
import {connect} from 'react-redux';
import actions from './actions';

function App({char, searchTerm, searchTermChanged}) {
  return (
    <section>
      <h1 style={{textAlign: 'center'}}>DC Superheroes</h1>

      <form>
        <div>
          <input
            style={{width: '100%'}}
            type="text"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={e => searchTermChanged(e.target.value)}
          />
        </div>
      </form>

      <table style={{width: '100%'}}>
        <thead>
          <tr style={{textAlign: 'left'}}>
            <th style={{textAlign: 'center'}}>Name</th>
            <th style={{textAlign: 'center'}}>Alter Ego</th>
            <th style={{textAlign: 'center'}}>First Appearance</th>
            <th style={{textAlign: 'center'}}>View</th>
          </tr>
        </thead>
        <tbody>
          {char.map(curChar => (
            <tr key={curChar.name}>
              <td style={{textAlign: 'center'}}>{curChar.name}</td>
              <td style={{textAlign: 'center'}}>{curChar.alter_ego}</td>
              <td style={{textAlign: 'center'}}>{curChar.first_appearance}</td>
              <img
                src={require(`./images/View/${curChar.name}.png`)}
                style={{
                  display: 'flex',
                  alignSelf: 'center',
                  justifySelf: 'center',
                  paddingLeft: '5rem',
                  paddingBottom: '5rem',
                  left: '-50%',
                }}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default connect(store => store, actions)(App);
