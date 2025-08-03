import React, { useEffect, useState } from 'react';
import { useSocket } from '../../hooks/useSocket';
import { Comment } from '../../types';

const CommentList: React.FC<{ blogId: string }> = ({ blogId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const socket = useSocket();

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`/api/comments/${blogId}`);
            const data = await response.json();
            setComments(data);
        };

        fetchComments();

        socket.on('newComment', (comment: Comment) => {
            setComments((prevComments) => [...prevComments, comment]);
        });

        return () => {
            socket.off('newComment');
        };
    }, [blogId, socket]);

    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <div key={comment.id} className="comment">
                    <p><strong>{comment.author}</strong>: {comment.content}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;