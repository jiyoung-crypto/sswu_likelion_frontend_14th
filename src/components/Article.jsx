import React, {useState} from 'react'
import full_heart from '../assets/img/full_heart.png'
import comment from '../assets/img/comment.png'
import empty_heart from '../assets/img/empty_heart.png'


const Article = ({title, content}) => {
    const [isLike, setIsLike]=useState(false)
    const [likeCount, setLikeCount]=useState(0)

    const toggleLike=() => {
        if (isLike) {
            setIsLike(false);
            setLikeCount(likeCount-1);
        } else {
            setIsLike(true);
            setLikeCount(likeCount +1)
        }
    };

    return (
    <div id="Article_Wrap">
        <div className='article'>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>

        <div className='icon_group'>
            <div className='comment'>
                <img src={comment} alt=""/>0
            </div>
            <div className='heart' onClick={toggleLike} style={{cursor: 'pointer'}}>
                <img src={isLike ? full_heart : empty_heart} alt=""/>
                {likeCount}
            </div>
        </div>
        
        
        
        <div className='comment_input_section'>
            <input type="text" placeholder='댓글을 입력해주세요!' />
            <button>등록</button>
        </div>
    </div>
  )
}

export default Article
