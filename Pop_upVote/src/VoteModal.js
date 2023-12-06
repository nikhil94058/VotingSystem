// src/VoteModal.js
import React, { useState } from 'react';

const VoteModal = ({ isOpen, onClose, onVote }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleVote = () => {
        if (selectedOption) {
            // Add your vote submission logic here
            onVote(selectedOption);
            // Close the modal after voting (you can modify this based on your logic)
            onClose();
        }
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className="Heading">Cast Your Vote</h2>


                <div className="image1"></div>


                <div className="info">
                    <h3> Name:Baburao Ganpatrao Apte</h3>
                    <h3></h3>Age:58</h3>
                    <h3>Party:Independent</h3>
                    <h3>Education:B.A (English Hons.)</h3>
                </div>
                <form>
                    <label>
                        <input
                            type="radio"
                            value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={() => setSelectedOption('option1')}
                        />
                        I have selected my candidate and I cannot change it.
                    </label>
                    <br />
                    {/*<label>*/}
                    {/*    <input*/}
                    {/*        type="radio"*/}
                    {/*        value="option2"*/}
                    {/*        checked={selectedOption === 'option2'}*/}
                    {/*        onChange={() => setSelectedOption('option2')}*/}
                    {/*    />*/}
                    {/*    Option 2*/}
                    {/*</label>*/}
                    <br />

                    <button type="button" onClick={handleVote}>Vote</button>
                </form>
            </div>
        </div>
    );
};

export default VoteModal;
