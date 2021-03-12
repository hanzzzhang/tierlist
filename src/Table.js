import React from 'react';
import './Table.css';

class Table extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      tiers: [
        // {tierName: 'S', items: 'han'},
        // {tierName: 'A', items: 'kevin'},
        // {tierName: 'B', items: 'john'},
        // {tierName: 'C', items: 'sam'},
        // {tierName: 'D', items: 'mark'},
      ]
    }
  }

  renderTableData() {
     return this.state.tiers.map((tiers, index) => {
        const { tierName, items } = tiers
        return (
           <tr key={tierName}>
              <td>{tierName}</td>
              <td>{items}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title'>the boys</h1>
           <table id='tiers'>
              <tbody>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
   }
 }

export default Table
