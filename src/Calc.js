import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default class Calc extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num1: '', num2: '', total: '' }
    }
    exel() {
        console.log("Num1: ", this.state.num1, " - Num2: ", this.state.num2)
        this.setState({ total: parseInt(this.state.num1) + parseInt(this.state.num2) })
        console.log(this.state)
    }

    render() {
        return (
            <form className="form-inline">
                <div className="input-group">
                    <InputGroup className="mb-3 inputbox">
                        <div className="form-group">
                            <FormControl
                                value={this.state.num1} onChange={(eve) => { this.setState({ num1: eve.target.value }) }}
                                placeholder="number one"
                                aria-label="num1"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="form-group">
                            <FormControl
                                value={this.state.num2} onChange={(eve) => { this.setState({ num2: eve.target.value }) }}
                                placeholder="number two"
                                aria-label="num2"
                                aria-describedby="basic-addon1"
                            />
                        </div>

                        <div className="input-group-btn">
                            <Button variant="success" onClick={this.exel.bind(this)}>Success</Button>
                        </div>
                        <div className="form-group">
                            <FormControl
                                value={this.state.total}
                                placeholder="sum"
                                aria-label="sum"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                    </InputGroup>
                </div>
            </form>
        )
    }
}