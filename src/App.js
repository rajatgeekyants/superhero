import React from 'react';

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
            <th>Name</th>
            <th>Alter Ego</th>
            <th>First Appearance in</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {char.map(curChar => (
            <tr key={curChar.name}>
              <td>{curChar.name}</td>
              <td>{curChar.alter_ego}</td>
              <td>{curChar.first_appearance}</td>
              <img src={require(`./images/View/${curChar.name}.png`)} />
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
