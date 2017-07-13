import React from 'react';

const VideoListItem = ({video , selectedVideo}) => {
    const imageUrl = video.snippet.thumbnails.default.url
    return(
        <li className="list-group-item">
            <div className="video-list media" onClick={function(){selectedVideo(video)}}>
                <div className="media-left video-item">
                    <img className="media-object" src={imageUrl} alt="thumb-pic" />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                    <small className="channalTitle">{video.snippet.channelTitle}</small>
                </div>
            </div>
        <style>{`
            .channalTitle{
                color: #CCC;
            }

            .list-group-item{
                cursor: pointer;
            }
            
            .list-group-item:hover{
                background-color: #eee
            }

            .video-item img{
                max-width: 100px;
            }

            .video-detail .details{
                margin-top: 10px;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 4px;
            }
            `}
        </style>
        </li>

    );
};


export default VideoListItem;