import _ from 'lodash';

//import React
import React, {Component} from 'react'; //corelib, manage component
import ReactDOM from 'react-dom'; //domlib
import SearchBar from './components/search_bar'; //relative path is required
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import API_KEY from "../apikey";

//for API search
import searchYoutube from 'youtube-api-v3-search';

//Creating a new component that returns html
class App extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Tanmay Bhat')
    }

    videoSearch(term){
        const options = {
            q: term,
            // part:'snippet',
            type: 'video'
        };

        searchYoutube(API_KEY, options, (error, videos) => {
            //this.setState({videos: videos});
            //for ES6
            if(error)
                console.error(error);
            console.log(videos.items);
            this.setState({
                videos: videos.items,
                selectedVideo: videos.items[0]
            });
        });
    }

    render(){
        //function can be called once every 300ms
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
        //passing props
        return ( 
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect = { (selectedVideo) => {
                        this.setState({selectedVideo})
                    }}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
