import React from 'react';

const VideoDetail = ({video}) => {
    //to prevent rendering without the request being completed
    if(!video){
        return <div>Loading...</div>
    }
    
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe width="854" height="480" src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="details">
                <div>
                    {video.snippet.title}
                </div>
                <div>
                    {video.snippet.description}
                </div>
            </div>
        </div>

    );
};

export default VideoDetail;