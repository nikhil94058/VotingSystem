// src/App.js
import React, { useState } from 'react';
import VoteModal from './VoteModal';
import './App.css';

const App = () => {
    const [isVoteModalOpen, setVoteModalOpen] = useState(false);

    const openVoteModal = () => {
        setVoteModalOpen(true);
    };

    const closeVoteModal = () => {
        setVoteModalOpen(false);
    };

    const handleVote = (selectedOption) => {
        // Add your logic to handle the vote, for example, send it to the server
        console.log(`Voted for ${selectedOption}`);
    };

    return (
        <div className="App">
            <h1>VOTING</h1>
            <button onClick={openVoteModal}>Cast Vote</button>

            <VoteModal isOpen={isVoteModalOpen} onClose={closeVoteModal} onVote={handleVote} />
        </div>
    );
};

export default App;
