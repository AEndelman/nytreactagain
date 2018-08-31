import React from "react";
import {
    Column,
    Message,
    MessageHeader,
    MessageBody,
    Icon,
    Delete
} from "bloomer";
import Article from "./Article.js";

class Results extends React.Component {
    constructor() {
        super();

        this.state = {
            results: []
        };
    }

    componentDidMount() {
        this.setState({ results: this.props.results });
    }

    clearResults = () => {
        this.props.setResults([]);
    };

    componentWillReceiveProps(newProps) {
        this.setState({ results: newProps.results });
    }

    render() {
        return (
            <Column className="is-gapless">
                <Column className="is-8 is-offset-2">
                    <Message isColor="primary">
                        <MessageHeader>
                            <p>
                                <Icon isAlign="left" icon="list" /> Results
                            </p>
                            <Delete onClick={this.clearResults} />
                        </MessageHeader>
                        <MessageBody className="has-text-centered">
                            {this.state.results.map(article => {
                                return (
                                    <Article
                                        article={article}
                                        key={article._id}
                                        updateSavedArticles={
                                            this.props.updateSavedArticles
                                        }
                                    />
                                );
                            })}
                        </MessageBody>
                    </Message>
                </Column>
            </Column>
        );
    }
}

export default Results;