import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:5000'; // Adjust the URL as needed

const useSocket = () => {
    const [socket, setSocket] = useState(null);
    const [comments, setComments] = useState([]);
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = io(SOCKET_SERVER_URL);
        setSocket(socketRef.current);

        socketRef.current.on('newComment', (comment) => {
            setComments((prevComments) => [...prevComments, comment]);
        });

        return () => {
            socketRef.current.disconnect();
        };
    }, []);

    const sendComment = (comment) => {
        if (socket) {
            socket.emit('sendComment', comment);
        }
    };

    return { comments, sendComment };
};

export default useSocket;