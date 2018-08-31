import React from "react";
import YearPicker from "./YearPicker.js";
import {
    Field,
    Label,
    Control,
    Input,
    Column,
    Message,
    MessageHeader,
    MessageBody,
    FieldBody,
    FieldLabel,
    Icon,
    Button,
    Help
} from "bloomer";

class Search extends React.Component {
    constructor() {
        super();

        this.state = {
            topic: "",
            startYear: "",
            endYear: "",
            isSubmitted: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
            isSubmitted: false
        });
    };

    handleSubmit = event => {
        this.setState({ isSubmitted: true });
        if (this.state.startYear <= this.state.endYear) {
            this.props.searchCB(
                this.state.topic,
                this.state.startYear,
                this.state.endYear
            );
        } else {
            alert("Start year must be less than end year!");
        }
    };

    getYearCB = (when, year) => {
        // alert(when + ": " + year);
        this.setState({ [when]: year });
    };

    validate = property => {
        if (this.state[property] === "" && this.state.isSubmitted) {
            return <Help isColor="danger">This field is required</Help>;
        }
    };

    render() {
        return (
            <Column className="is-gapless">
                <Column className="is-8 is-offset-2">
                    <Message isColor="info">
                        <MessageHeader>
                            <p>
                                <Icon isAlign="left" icon="search" /> Search
                            </p>
                        </MessageHeader>
                        <MessageBody>
                            <Field>
                                <Label>Topic</Label>
                                <Control>
                                    <Input
                                        type="text"
                                        name="topic"
                                        onChange={this.handleChange}
                                    />
                                </Control>
                                {this.validate("topic")}
                            </Field>

                            <Field isHorizontal>
                                <FieldBody>
                                    <FieldLabel isNormal>
                                        <Label>Start Year</Label>
                                    </FieldLabel>
                                    <YearPicker
                                        when="startYear"
                                        getYearCB={this.getYearCB}
                                    />
                                    <FieldLabel isNormal>
                                        <Label>End Year</Label>
                                    </FieldLabel>
                                    <YearPicker
                                        when="endYear"
                                        getYearCB={this.getYearCB}
                                    />
                                </FieldBody>
                            </Field>

                            <Column hasTextAlign="centered">
                                <Button
                                    isColor="info"
                                    onClick={this.handleSubmit}
                                >
                                    <p>Search</p>
                                </Button>
                            </Column>
                        </MessageBody>
                    </Message>
                </Column>
            </Column>
        );
    }
}

export default Search