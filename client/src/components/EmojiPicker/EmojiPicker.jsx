import React, { useState } from 'react';
import Picker from 'emoji-picker-react';

const EmojiPicker = ({textRef}) => {

    const [isShow , setShow] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        textRef.current.value += emojiObject.emoji
        
      };
    

    return (
        <div onMouseLeave={() => setShow(false)}>
            <div className="absolute right-3 top-2 z-20 cursor-pointer">
								<button onClick={() => setShow(x => !x)}><svg
									className="w-6 h-6 md:w-8 md:h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg></button>
							</div>
							{isShow && <div className='absolute top-14 z-20 cursor-pointer md:top-8 md:right-0'>
								<Picker onEmojiClick={onEmojiClick} />
							</div>}
        </div>
    );
};

export default EmojiPicker;