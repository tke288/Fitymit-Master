import React from "react";

class ContactConfirm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel(e) {
        e.preventDefault();
        window.location.replace("http://localhost:3000/discover")
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Your tutor will be in contact")
        window.location.replace("http://localhost:3000/discover")
    }


    render() {

        return (
            <div>
                <div className="form-group">
                    <input type="submit" onClick={this.handleSubmit} />
                </div>
                <div className="form-group">
                    <input type="submit" onClick={this.handleCancel} className="Cancel" value="Cancel" />
                </div>
            </div>
        )
    }
}

export default ContactConfirm;