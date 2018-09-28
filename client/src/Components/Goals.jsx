import React, { Component } from 'react';

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      goals: [],
    })
  }

  componentDidMount() {
    this.getGoals();
  }

  getGoals = () => {
    fetch('/api/goals')
      .then(res => res.json())
      .then(goals =>
        this.setState({
          goals: goals
        }));
  }

  render() {
    const goals = this.state.goals;
    return (
      <div>
        <h1>2017 Goals</h1>
    
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Goals</th>
            </tr>
          </thead>
          <tbody>
            {goals.map(goal => 
              <tr>
                <td>{goal.player}</td>
                <td>{goal.goals}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Goals;

