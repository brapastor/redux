import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from "../components/video-player.controls";
import ProgressBar from "../components/progress-bar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";
import FullScreen from "../components/full-screen";

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
    };
    togglePlay = event => {
        this.setState({
            pause: !this.state.pause
        })
    };

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    };

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        });
    };
    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    };
    handleProgressChange = event => {
        // event.target.value
        this.video.currentTime = event.target.value
    };

    handleSeeking = event => {
        // TODO: componente empieza a cargar
        this.setState({
            loading: true
        })
    };
    handleSeeked = event => {
        // TODO: COMPONENTE DEJA DE CARGAR
        this.setState({
            loading: false
        })
    };
    handleVolumeChange = event => {
        this.video.volume = event.target.value;
    };

    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen();
        }
        else {
            document.webkitExitFullscreen();
        }
    };
    setRef = element => {
        this.player = element;
    };

    render() {
        return (
            <VideoPlayerLayout setRef={this.setRef}>
                <Title
                    title={this.props.title}
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar
                        handleProgressChange={this.handleProgressChange}
                        value={this.state.currentTime}
                        duration={this.state.duration}
                    />
                    <Volume
                        handleVolumeChange={this.handleVolumeChange}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner
                    active={this.state.loading}
                />
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    src={this.props.src}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;