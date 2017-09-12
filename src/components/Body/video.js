import _ from 'lodash';
import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './Video/searchbar';
import VideoList from './Video/video_list'
import VideoDetail from './Video/video_detail'

// youtube api key for gh-page
const youtubeKey = "AIzaSyB0GKSn38Jgb9XCzLUAoxNYNQqKwIqZ2Xk";
// youtube api key for localhost
//const youtubeKey = "AIzaSyAW3CMB8q1N0AGfyoUoGUx9EsPsirjdNOA";

class Video extends Component{
        constructor(props){
                super(props);
                this.max = 5;
                this.loadMore = () =>{
                        this.max += 5;
                        
                        if(this.max <= 50){
                                this.videoSearchTerm(null, this.max)
                        } 
                        if(this.max === 50){
                                this.setState({loadMoreVisible:false})
                        }
                };
                this.videoSearchTerm = (term , maxResults) => {
                        if(!term){
                                term = this.state.term;
                        }
                        if(!maxResults){
                                maxResults = 5;
                        }
                        YTSearch({key : youtubeKey , term:term , maxResults:maxResults} , videos => {
                                this.setState({
                                        videos : videos,
                                        selectedVideo : videos[0],
                                        term : term
                                });
                        })
                } 
                this.state = {
                        videos : [] ,
                        selectedVideo : null ,
                        term : null ,
                        maxResults : 5,
                        loadMoreVisible: true
                }
                this.videoSearchTerm('javascript')
        }

        render(){
                const videoSearch = _.debounce((term) => this.videoSearchTerm(term) , 300);
                return(
                        <div>  
                            <div>
                                <SearchBar videoSearchTerm={videoSearch} setMax={() => {
                                        this.max = 5;
                                        this.setState({loadMoreVisible:true})
                                        }} /><br />
                                <VideoDetail video={this.state.selectedVideo} />
                                <VideoList 
                                        videos={this.state.videos}
                                        selectedVideo={selectedVideo => this.setState({selectedVideo})}
                                        loadMore={this.loadMore} 
                                        loadMoreVisible={this.state.loadMoreVisible}/>
                            </div>
                        </div>
                )
        }
}

export default Video