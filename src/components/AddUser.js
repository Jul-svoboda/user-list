import React from "react";

class AddUser extends React.Component {
    userAdd = {};
    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            bio: '',
            age: 1, 
            isHappy: false,
        }
    }
    user = this.props.user
    render() {
        return (
            <form className="form" ref={(el) => this.myForm = el}>
                <input className="form_input" placeholder="First Name" onChange={(e) => this.setState({first_name: e.target.value })} />
                <input className="form_input" placeholder="Last Name" onChange={(e) => this.setState({last_name: e.target.value })} />
                <textarea className="form_input" placeholder="Your Bio" onChange={(e) => this.setState({bio: e.target.value })} />
                <input className="form_input" placeholder="Age" onChange={(e) => this.setState({age: e.target.value })} />
                <div className="form_input-checkbox">
                   <label htmlFor="isHappy">Are you Happy?</label>
                    <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked })} /> 
                </div>
                <button className="form_input-button" type="button" onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        bio: this.state.bio,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                    if (this.props.user) {
                        this.userAdd.id = this.props.user.id
                    }
                    this.props.Add(this.userAdd)
                }}>Add</button>
            </form>
        )
    }
}

export default AddUser