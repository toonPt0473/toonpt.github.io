import React from 'react'
import VideoListItem from './video_item'

const VideoList = (props) => {
    if(props.videos.length === 0){
        return<div>Loading . . .</div>
    }
    const videoItem = props.videos.map((val,index) => {
        return (                
            <VideoListItem 
                key={val.etag} 
                video={val} 
                selectedVideo={props.selectedVideo}/>
        )})
    
    return(
            <ul className="col-md-4 list-group">
                {videoItem}
                {props.loadMoreVisible ? <button className="btn" onClick={props.loadMore}>Load more ...</button> : null}
                <style>
                    {`
                    .btn {
                        position: absolute;
                        left:35%;
                        background: #c0d0db;
                        background-image: -webkit-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: -moz-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: -ms-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: -o-linear-gradient(top, #c0d0db, #135f8f);
                        background-image: linear-gradient(to bottom, #c0d0db, #135f8f);
                        -webkit-border-radius: 10;
                        -moz-border-radius: 10;
                        border-radius: 10px;
                        font-family: Arial;
                        color: #ffffff;
                        font-size: 15px;
                        padding: 10px 20px 10px 20px;
                        text-decoration: none;
                        margin-top: 10px;
                        margin-right: auto;
                        margin-left: auto;
                        padding-left: 15px;
                        padding-right: 15px;
                        }

                        .btn:hover {
                        background: #b52d9a;
                        background-image: -webkit-linear-gradient(top, #b52d9a, #fa0021);
                        background-image: -moz-linear-gradient(top, #b52d9a, #fa0021);
                        background-image: -ms-linear-gradient(top, #b52d9a, #fa0021);
                        background-image: -o-linear-gradient(top, #b52d9a, #fa0021);
                        background-image: linear-gradient(to bottom, #b52d9a, #fa0021);
                        text-decoration: none;
                        }
                    `}
                </style>
            </ul>
    );
};

export default VideoList;