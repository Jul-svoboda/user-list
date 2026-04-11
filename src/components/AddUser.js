import React from "react";

class AddUser extends React.Component {
    userAdd = {};
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            mail: '',
            avatar: '', 
            isHappy: false,
        }
    }
    user = this.props.user
    render() {
        return (
            <form 
                className="form" 
                ref={(el) => this.myForm = el}
                onSubmit={(e) => {
                    e.preventDefault()

                    this.userAdd = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    mail: this.state.mail,
                    avatar: this.state.avatar,
                    isHappy: this.state.isHappy
                    }

                    if (this.props.user) {
                    this.userAdd.id = this.props.user.id
                    }

                    this.props.Add(this.userAdd)
                    this.myForm.reset()
                }}
            >
                <div className="cross" onClick={this.props.onToggleForm}>
                    <div className="cross__line"></div>
                    <div className="cross__line"></div>
                </div>
                <input className="form_input" placeholder="First Name" required onChange={(e) => this.setState({first_name: e.target.value })} />
                <input className="form_input" placeholder="Last Name" onChange={(e) => this.setState({last_name: e.target.value })} />
                <input className="form_input" placeholder="Email" onChange={(e) => this.setState({mail: e.target.value })} />
                {/* <input className="form_input" type="url" placeholder="Avatar" onChange={(e) => this.setState({avatar: e.target.value })} /> */}
                <div className="form_input-checkbox">
                   <label htmlFor="isHappy">Are you Happy?</label>
                    <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked })} /> 
                </div>
                <button className="button" type="submit" onClick={this.props.onToggleForm}>
                    Add
                </button>
            </form>
        )
    }
}

export default AddUser