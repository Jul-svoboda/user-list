import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__title">{this.props.title}</div>
                <button className="button header__button" onClick={this.props.onToggleForm}>Sing in</button>
            </header>
        )
    }
}

export default Header