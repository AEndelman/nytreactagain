
import React from "react";
import {
    Media,
    MediaContent,
    MediaLeft,
    MediaRight,
    Image,
    Content,
    Delete,
    Column,
    Message,
    MessageBody,
    MessageHeader,
    Icon
} from "bloomer";
import API from "../utils/API.js";

class Saved extends React.Component {
    componentWillMount() {
        this.props.updateSavedArticles();
    }

    deleteSavedArticle = id => {
        API.deleteArticle(id).then(res => {
            this.props.updateSavedArticles();
        });
    };

    listSavedArticles = () => {
        if (this.props.savedArticles.length === 0) {
            return "There are currently no saved articles";
        } else {
            return this.props.savedArticles.map(article => {
                return (
                    <Media key={article._id}>
                        <MediaLeft>
                            <Image isSize="75x75" src={article.imgURL} />
                        </MediaLeft>
                        <MediaContent>
                            <Content>
                                <p>
                                    <a href={article.url}>
                                        <strong>{article.title}</strong>
                                    </a>
                                    <br />
                                    <small>
                                        {article.author} - {article.date}
                                    </small>
                                    <br />
                                    {article.snippet}
                                </p>
                            </Content>
                        </MediaContent>
                        <MediaRight>
                            <Delete
                                onClick={() => {
                                    this.deleteSavedArticle(article._id);
                                }}
                            />
                        </MediaRight>
                    </Media>
                );
            });
        }
    };

    render() {
        return (
            <Column className="is-gapless">
                <Column className="is-8 is-offset-2">
                    <Message isColor="warning">
                        <MessageHeader>
                            <p>
                                <Icon isAlign="left" icon="save" /> Saved
                                Articles
                            </p>
                        </MessageHeader>
                        <MessageBody className="has-text-centered">
                            {this.listSavedArticles()}
                        </MessageBody>
                    </Message>
                </Column>
            </Column>
        );
    }
}

export default Saved;