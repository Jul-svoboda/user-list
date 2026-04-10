import React from "react";
import User from "./User";

class Users extends React.Component {
    render() {
         if(this.props.users.length === 0) {
            return (
                <div className="user">
                        <h3>The list of users is empty</h3>
                    </div>
            )
        }
        return (
            <div>
                {this.props.users.map((el) => (
                    <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el}/>
                ))}
            </div>
        )
    }
}

export default Users