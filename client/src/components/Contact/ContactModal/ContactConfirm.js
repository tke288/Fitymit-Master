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
            <form>
                <fieldset>
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>   
                    &nbsp; &nbsp;&nbsp;  
                    <button type="submit" class="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                </fieldset>
            </form>
        )
    }
}

export default ContactConfirm;