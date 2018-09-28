import React, { Component } from 'react';

class Assists extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      assists: [],
    })
  }

  componentDidMount() {
    this.getAssists();
  }

  getAssists = () => {
    fetch('/api/assists')
      .then(res => res.json())
      .then(assists =>
        this.setState({
          assists: assists
        }));
  }

  render() {
    const assists = this.state.assists;
    return (
      <div>
        <h1>2017 Assists</h1>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Assists</th>
            </tr>
          </thead>
          <tbody>
            {assists.map(assists => 
              <tr>
                <td>{assists.player}</td>
                <td>{assists.assists}</td>
              </tr>
            )}
          </tbody>
        </table>
        <br/>
      </div>
    );
  }
}
export default Assists;

