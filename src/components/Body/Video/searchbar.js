import React, { Component } from 'react';

class SearchBar extends Component {
    // constructor(props){
    //     super(props);        
    // }
    render() {
        const self = this;
        return (
            <div className="search-bar">
                <input 
                    placeholder="   Search by Press 'Enter'"
                    onKeyUp={event => {
                        if(event.keyCode === 13){
                            console.log(this.props)
                            this.props.setMax()
                            this.onInputChange(event.target.value , self.props.maxResults)
                            }
                        }
                    } />
                <style>
                    {`
                        .search-bar{
                            margin: 20px;
                            text-align: center;

                        }

                        .search-bar input{
                            width: 70%;
                            border: solid #666666 0.5px;
                            border-radius: 5px;
                        }
                    `}
                </style>
            </div>
        )
    }

    onInputChange(term , maxResults){
        this.props.videoSearchTerm(term)
    }
}

export default SearchBar;