import movieLogo from '../utils/images/movie-img.jpg'
import likeButton from '../utils/images/like-img.png'
import playButton from '../utils/images/play-button.png'
import dislikeButton from '../utils/images/dislikeImg.png'
import caretButton from '../utils/images/caret_Img.png'
import React, { useState, useEffect } from 'react';

import {setLikeCount, toggleDescription} from '../redux/appSlice';
import { useDispatch, useSelector } from 'react-redux';

const VideoCard = () => {
  
 //Make connection to Element
const isDescriptionVisible = useSelector((store) => store.app.isDescriptionVisible);
const likeCount = useSelector((store) => store.app.likeCount);

const dispatch = useDispatch();

//Dispatch functions
const toggleDescriptionHandler = () => {
  dispatch(toggleDescription()); // Dispatch action to toggle description visibility
};

const handleLikeClick = () => {
  dispatch(setLikeCount());
};


  //const [likeCount, setLikeCount] = useState(0);
 
  useEffect(() => {
    // Monitor changes in likeCount if needed
    // console.log('Like count changed:', likeCount);
  }, [likeCount]);

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-black m-4">
          {/* Video Thumbnail */}
          <img
            className="w-full h-40 object-fill object-center "
            src={movieLogo} /* Replace with your image URL */
            alt="Video Thumbnail"
          />

          {/* Video Information
          <div className="px-4 py-2 ">
            <div className="font-bold text-xl mb-2 text-white flex justify-center">
                <img className="size-10 m-2 mr-5" src={playButton}/>
                <button onClick={handleLikeClick}>
                <img className="size-10 m-2 mr-5" src={likeButton}/>
                </button>
                <img className="size-10 m-2 mr-5" src={dislikeButton}/>
                <button onClick={caretClicked}>
                <img className="size-2 m-5 ml-10" src={caretButton}/>
                </button>
            </div> */}


{/* Video Information */}
      <div className="px-4 py-2 relative">
        <div className='flex justify-between'>
          <div className="font-bold text-xl mb-2 text-white">
            <button><img className='w-12' src={playButton} alt="Play Button" /></button>
            <button onClick={handleLikeClick}>
              <img className='w-7 mr-2 mb-4' src={likeButton} alt="Like Button" />
            </button>
            <button><img className='w-7 mb-4' src={dislikeButton} alt="Dislike Button" /></button>
          </div>
          <button
            onMouseEnter={toggleDescriptionHandler}
            onMouseLeave={toggleDescriptionHandler}
            onFocus={toggleDescriptionHandler}
            onBlur={toggleDescriptionHandler}
            onClick={toggleDescriptionHandler}

        >
            <img className='w-5 mb-4' src={caretButton} alt="Drop Button" />
            {/* Floating Description */}

            {isDescriptionVisible ? (
          <div className="absolute bg-gray-700 text-white p-1 rounded-lg shadow-md top-8 left-6 z-10 text-sm">
            {/* Description content goes here */}
            <p>M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical sports drama film written and directed by Neeraj Pandey</p>
          </div>
        ) : null}
          </button>
        </div>


        <p className="text-gray-300">{likeCount} likes</p>


            <div className='flex'>
            <p className=" mr-2 text-green-500">97% Match</p>
            <p className="text-gray-300 text-base">2h 35m</p>
            </div>
            <div>
            <ol className='flex'>
                <li className="text-gray-300 text-base mr-2">Biopic</li>
                <li className="text-gray-300 text-base mr-2">Drama</li>
                <li className="text-gray-300 text-base">Sports</li>
            </ol>
            </div>
          </div>
        </div>
      );
    };

export default VideoCard;
