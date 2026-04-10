import React from "react";
import AddUser from "./AddUser";
import { PiPlusSquareDuotone, PiGavelDuotone } from "react-icons/pi";

class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user
    render() {
        return (
            <div className="user">
                <PiPlusSquareDuotone onClick={() => this.props.onDelete(this.user.id)} className="icon icon-delete"/>
                <PiGavelDuotone onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="icon icon-edit"/>
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <p>{this.user.email}</p>
                <img src={this.user.avatar ? `https://i.pravatar.cc/150?u=${this.user.email}` 
                : `https://api.dicebear.com/7.x/initials/svg?seed=${this.user.first_name}`} alt="Avatar"/>
                <p>{this.user.isHappy ? ':)' : ":(" }</p>

                {this.state.editForm && <AddUser user={this.user} Add={this.props.onEdit} /> }
            </div>
        )
    }
}

export default User