var FixedDataTable = require('fixed-data-table');
var React = require('react');

const {Table, Column, Cell} = FixedDataTable;

const ImageCell = ({ rowIndex, data, col, ...props }) => (
  <div>
    <img style={{
      width: '100%'
    }} src={data[rowIndex][col]}/>
  </div>
);

const TextCell = ({ rowIndex, data, colFirstName, colLastName, ...props }) => (
  <Cell {...props}>
    {data[rowIndex][colFirstName] + ' ' + data[rowIndex][colLastName]}
  </Cell>
);

class DataTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {},
      usersFiltered: {}
    };

    this._onFilterChange = this._onFilterChange.bind(this);
  }

  componentWillMount() {
    fetch('https://users-list-api.now.sh/users').then((response) => {
      return response.json()
    }).then((users) => {
      this.setState({users: users})
    })
  }

  _onFilterChange(e) {
    let users = this.state.users,
      filterBy = e.target.value.toLowerCase(),
      size = Object.keys(this.state.users).length,
      filteredIndexes = [];

    for (let index = 0; index < size; index++) {
      let firstName = users[index].firstName,
        lastName = users[index].lastName,
        searchName = firstName + ' ' + lastName;

      if (searchName.toLowerCase().indexOf(filterBy) !== -1) {
        filteredIndexes.push(users[index]);
      }
    }

    this.setState({
      usersFiltered: filteredIndexes
    });
  }

  openDetailsUser(e, index) {    
    window.location.href = "/#/user/" + this.state.users[index]._id;
  }

  render() {

    var {users, usersFiltered} = this.state;

    let dataUsers = users;

    if (Object.keys(usersFiltered).length) {
      dataUsers = usersFiltered;
    }

    return (
      <div>
        <input onChange={this._onFilterChange} placeholder="Filter by name" className="search-input"/>
        <br/>
        <Table
          onRowClick={this.openDetailsUser.bind(this)}
          rowHeight={70}
          rowsCount={Object.keys(dataUsers).length}
          headerHeight={50}
          width={500}
          height={1200}>

          <Column 
            cell={< ImageCell data={dataUsers} col="avatar" />} 
            fixed={true} 
            width={70} />

          <Column 
            header={<Cell> User </Cell>} 
            cell={< TextCell 
            data={dataUsers}
            colFirstName = "firstName" colLastName = "lastName" />}
            fixed={true}
            width={430}/>
        </Table>
      </div>
    );
  }
}

module.exports = DataTable;