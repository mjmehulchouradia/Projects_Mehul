import React from 'react'
import movieLogo from '../utils/images/movie-img.jpg'
import likeButton from '../utils/images/like-img.png'
import playButton from '../utils/images/play-button.png'
import dislikeButton from '../utils/images/dislikeImg.png'
import caretButton from '../utils/images/caret_Img.png'

import { useState, useEffect } from 'react'

const VideoCard = () => {
  
  const [likeCount, setLikeCount] = useState(0);

  const [isCaretClicked,setIsCaretClicked] = useState(false);


  // useEffect to monitor changes in likeCount
  useEffect(() => {
    // You can perform actions here when likeCount changes, if needed
    // console.log('Like count changed:', likeCount);
  }, [likeCount]);

  const handleLikeClick = () => {
    // Increment likeCount by 1 when the like button is clicked
    setLikeCount(likeCount + 1);
  };

  const caretClicked =() =>{
setIsCaretClicked(!isCaretClicked);
  };

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
                <button onClick={handleLikeClick}>
                <img className="size-10 m-2 mr-5" src={likeButton}/>
                </button>
                <img className="size-10 m-2 mr-5" src={dislikeButton}/>
                <button onClick={caretClicked}>
                <img className="size-2 m-5 ml-10" src={caretButton}/>
                </button>
            </div>
          {/*If Else in REACT */}
        {isCaretClicked 
        ? ( <div className='bg-gray-500 rounded relative w-60 text-wrap'>
          <p>M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical sports drama film written and directed by Neeraj Pandey.</p>
           </div>
            )
        :(
          <div className='bg-gray-500 rounded hidden'>
          </div>
          )
        }

        <p className="text-gray-300">{likeCount} likes</p>


            {/* if(isCaretClicked)
            {
                <div className='bg-gray-500 rounded absolute w-60 text-wrap'>
                  <p>M.S. Dhoni: The Untold Story is a 2016 Indian Hindi-language biographical sports drama film written and directed by Neeraj Pandey</p>
                </div>
            }
            else
            {
              <div className='bg-gray-500 rounded hidden'>
              </div>
            } */}



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
