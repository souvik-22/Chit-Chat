import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();

    console.log(user);

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }

    // useEffect(() => {
    //     if(!user) {
    //         history.push('/');

    //         return;
    //     }
    // }, [user, history]);

    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Chit-Chat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="4d2b9049-b794-454e-bd18-a1a76166aa28"
                userName="."
                userSecret="."
            />
        </div>
    );
}

export default Chats;