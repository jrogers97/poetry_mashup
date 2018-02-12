import React from 'react';
import store from '../store/index';
import {connect} from 'react-redux';
import { DefaultPlayer as Video, apiHelpers } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import EnglishVideo from './EnglishVideo';
import {shuffle, arraysEqual, shuffle_avoid_original} from '../util/helper-functions';

// creates an object that will be used to create a sortable list, consists of one video
const SortableItem = SortableElement(({value,index}) =>
	<div className="sortable-item">
		 <Video className="video" key={index} height="100%" width="100%" src={value} type="video/mp4" controls={[]} playsInline />
	</div>
	);

//creates an object populated with sortable items (videos)
const SortableList = SortableContainer(({items}) => {
	return (
	    <ul>
	      {items.map((value, index) => (
	        <SortableItem key={`item-${index}`} index={index} value={value} /> 
	      ))}
	    </ul>
	  );
	});


class SegmentedVideo extends React.Component {
	constructor(props) {
		super(props);
		var segment_1 = require('../videos/'+ this.props.poem +'/segment_1.mp4');
		var segment_2 = require('../videos/'+ this.props.poem +'/segment_2.mp4');
		var segment_3 = require('../videos/'+ this.props.poem +'/segment_3.mp4');
		var segment_4 = require('../videos/'+ this.props.poem +'/segment_4.mp4');
		this.state = {
			items: [segment_1, segment_2, segment_3, segment_4],
			shuffled_items: shuffle_avoid_original([segment_1, segment_2, segment_3, segment_4])
		};

	{/*	this.shuffle = this.shuffle.bind(this);
		this.shuffle_avoid_original = this.shuffle_avoid_original.bind(this);
		this.arraysEqual = this.arraysEqual.bind(this); */}
	}

	componentDidUpdate(prevProps) {
		if (prevProps.poem !== this.props.poem) {
			var segment_1 = require('../videos/' + this.props.poem + '/segment_1.mp4');
			var segment_2 = require('../videos/' + this.props.poem + '/segment_2.mp4');
			var segment_3 = require('../videos/' + this.props.poem + '/segment_3.mp4');
			var segment_4 = require('../videos/' + this.props.poem + '/segment_4.mp4');
			this.setState({
				items: [segment_1, segment_2, segment_3, segment_4],
				shuffled_items: shuffle_avoid_original([segment_1, segment_2, segment_3, segment_4])
			});

			document.getElementById('disable').style.display = "none";
			document.getElementById('instructions-2').classList.remove('hide');
			document.getElementById('instructions-3').classList.remove('hide');
			document.getElementById('instructions-4').classList.remove('hide');
		};
	}
   
	onSortEnd = ({oldIndex, newIndex}) => {
		this.setState({
			shuffled_items: arrayMove(this.state.shuffled_items, oldIndex, newIndex)
		});
	};

	render() {
		if (arraysEqual(this.state.shuffled_items, this.state.items)) {
			document.getElementById('disable').style.display = "block";
			document.getElementById('instructions-2').classList.add('hide');
			document.getElementById('instructions-3').classList.add('hide');
			document.getElementById('instructions-4').classList.add('hide');
			return (
				<EnglishVideo poem={this.props.poem}/>
				);
		}

		return(
			<div id="segment-video-container">
				<SortableList lockAxis="x" axis="x" pressDelay={100} items={this.state.shuffled_items} onSortEnd={this.onSortEnd} />
			</div>
		 );
	}
}

const mapStateToProps = function(store) {
  return {
    poem: store.poemState.poem,
  };
};

export default connect(mapStateToProps)(SegmentedVideo);

