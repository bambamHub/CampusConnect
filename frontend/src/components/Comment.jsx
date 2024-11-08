// import React from 'react'
// import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

// const Comment = ({ comment }) => {
//     return (
//         <div className='my-2'>
//             <div className='flex gap-3 items-center'>
//                 <Avatar>
//                     <AvatarImage src={comment?.author?.profilePicture} />
//                     <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>
//                 <h1 className='font-bold text-sm'>{comment?.author.username}<span className='font-normal pl-1'>{comment?.text}</span></h1>
//             </div>
//         </div>
//     )
// }

// export default Comment


import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Comment = ({ comment }) => {
    // Check if comment and comment.author exist
    if (!comment || !comment.author) {
        return null; // Return nothing if comment or author is null/undefined
    }

    return (
        <div className='my-2'>
            <div className='flex gap-3 items-center'>
                <Avatar>
                    <AvatarImage src={comment.author.profilePicture} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h1 className='font-bold text-sm'>
                    {comment.author.username}
                    <span className='font-normal pl-1'>{comment.text}</span>
                </h1>
            </div>
        </div>
    )
}

export default Comment
