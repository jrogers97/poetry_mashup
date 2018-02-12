import React from 'react';
import store from '../store/index';
import {connect} from 'react-redux';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

// const vid_path = '../videos/Ode-Sea-English.mp4';
// const vid_path = 'https://download.blender.org/durian/trailer/sintel_trailer-720p.mp4';

function MainVideo(props) {
	var main_vid = require('../videos/' + props.poem + '/main.mp4');
	return (
	 	<Video className="video" height="100%" width="100%" src={main_vid} type="video/mp4" playsInline/> 
	  );
}

export default MainVideo;