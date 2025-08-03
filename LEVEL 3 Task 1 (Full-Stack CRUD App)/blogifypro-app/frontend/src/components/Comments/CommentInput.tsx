import React, { useState } from 'react';
import { useSocket } from '../../hooks/useSocket';

const CommentInput = ({ blogId }) => {
    const [comment, setComment] = useState('');
    const socket = useSocket();

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            socket.emit('newComment', { blogId, comment });
            setComment('');
        }
    };

    return (
        <form onSubmit={handleCommentSubmit} className="comment-input-form">
            <textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Add a comment..."
                className="comment-input"
                required
            />
            <button type="submit" className="submit-comment-button">Submit</button>
        </form>
    );
};

export default CommentInput;