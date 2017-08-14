import React, {Component} from 'react';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
        };
    }

    componentWillMount() {
        fetch('https://users-list-api.now.sh/users/' + this.props.params.id).then((response) => {
            return response.json();
        }).then((user) => {
            this.setState({user: user})
        })
    }

    render() {
        let user = this.state.user;

        return (
            <div className="user-detail">
                <img src={user.avatar} alt="User avatar" />
                <h1>{user.firstName + ' ' + user.lastName}</h1>
                <h2>{user.bio}</h2>
            </div>
        );
    }
}
export default User;