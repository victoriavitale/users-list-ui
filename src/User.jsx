import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };
    }

    componentWillMount() {
        fetch('http://localhost:5000/users/' + this.props.match.params.id).then((response) => {
            return response.json();
        }).then((user) => {
            this.setState({user: user})
        })
    }

    render() {
        let user = this.state.user;

        return (
            <div>
                <img src={user.avatar} alt="" />
                <h1>Name: {user.firstName + ' ' + user.lastName}</h1>
                <p>{user.bio}</p>
            </div>
        );
    }
}
export default User;
