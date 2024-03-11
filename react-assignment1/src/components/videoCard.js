import React from 'react'
import movieLogo from '../utils/images/movie-img.jpg'
import likeButton from '../utils/images/like-img.png'
import playButton from '../utils/images/play-button.png'
import dislikeButton from '../utils/images/dislikeImg.png'

const videoCard = () => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-black m-4">
          {/* Video Thumbnail */}
          <img
            className="w-full h-40 object-fill object-center "
            src={movieLogo} /* Replace with your image URL */
            alt="Video Thumbnail"
          />

          {/* Video Information */}
          <div className="px-4 py-2 ">
            <div className="font-bold text-xl mb-2 text-white flex justify-center">
                <img className="size-10 m-2 mr-5" src={playButton}/>
                <img className="size-10 m-2 mr-5" src={likeButton}/>
                <img className="size-10 m-2 mr-5" src={dislikeButton}/>
            </div>
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

export default videoCard;
