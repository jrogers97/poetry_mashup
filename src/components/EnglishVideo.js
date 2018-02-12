import React from 'react';
import store from '../store/index';
import {connect} from 'react-redux';
import { DefaultPlayer as Video, apiHelpers } from 'react-html5video';
import 'react-html5video/dist/styles.css';

// const vid_path = '../videos/Ode-Sea-English.mp4';
// const vid_path = 'https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4';

function EnglishVideo(props) {
	var english_vid = require('../videos/' + props.poem + '/english.mp4');
	return (
		<div id="english-video-container">
			<Video id="english-video" className="video" src={english_vid} type="video/mp4" playsInline/>
		</div>
	  );
}

export default EnglishVideo;