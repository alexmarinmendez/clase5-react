import React from "react";

class SearchArea extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: "",
        };
        // this.submitHandler = this.submitHandler.bind(this);
    }

    // submitHandler(e) {
    //     e.preventDefault();
    //     console.log("Searching", this.state.keyword);
    // }

    submitHandler = (e) => {
        e.preventDefault();
        console.log("Searching", this.state.keyword);
    };

    render() {
        return (
            <div className="search-area">
                <form
                onSubmit={this.submitHandler}
                >
                <label htmlFor="keyword">
                Search
                <input
                    id="keyword"
                    value={this.state.keyword}
                    placeholder="Search Keyword"
                    onChange={(e) => this.setState({keyword: e.target.value})}
                />
                </label>
                <button>Submit</button>
            </form>
            </div>
        );
    }
};

export default SearchArea;