import React, {useState} from 'react';
export function GetVotes({state}) {
    const [name, setName] = useState("");
    const [vote, setVote] = useState("");
    const getVotes = async(event) => {
        event.preventDefault();

        const {contract} = state;
        try {
            const votes = await contract.getVotes(name);
            setVote(votes.toString());
        } catch (error){
            console.log(error);
        }
    }
    return (
        <form onSubmit = {getVotes}>
            <label>Candidate: </label>
            <input type='text' 
            value={name} 
            onChange={e => setName(e.target.value)}
            placeholder='Enter candidate address'/>
            <br/>
            <br/>
            <p>{vote}</p>
            <button
                type='submit'
                disabled = {!state.contract} 
            >Get Votes</button> 

        </form>)
}
