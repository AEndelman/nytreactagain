import React from "react";
import Header from "./Header";
import Results from "./Results";
import Saved from "./Saved";
import Search from "./Search";
import axios from "axios";
import API from "../utils/API";

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            results: [],
            savedArticles: []
        };
    }

    searchFunc = (topic, startYear, endYear) => {
        console.log("topic:", topic);
        console.log("startYear:", startYear);
        console.log("endYear:", endYear);

        let begin_date = startYear ? `&begin_date=${startYear}0101` : "";
        let end_date = endYear ? `&end_date=${endYear}1231` : "";

        // Search for topic
        let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process
            .env.REACT_APP_NYT_API_KEY}&q=${encodeURIComponent(topic)}${begin_date}${end_date}`;

        axios.get(queryURL).then(response => {
            // Set state to results
            console.log(queryURL);
            console.log(response);
            console.log(response.data.response.docs);
            this.setState({ results: response.data.response.docs });
        });
    };

    setResults = results => {
        this.setState({ results });
    };

    updateSavedArticles = cb => {
        API.getSavedArticles().then(res => {
            this.setState({ savedArticles: res.data });
            if (cb) {
                cb();
            }
            console.log("Saved articles: ", this.state.savedArticles);
        });
    };

    render() {
        return (
            <div>
                <br />
                <Header />
                <Search searchCB={this.searchFunc} />
                {this.state.results.length === 0 ? (
                    ""
                ) : (
                    <Results
                        results={this.state.results}
                        updateSavedArticles={this.updateSavedArticles}
                        setResults={this.setResults}
                    />
                )}
                <Saved
                    savedArticles={this.state.savedArticles}
                    updateSavedArticles={this.updateSavedArticles}
                />
            </div>
        );
    }
}

export default Main;