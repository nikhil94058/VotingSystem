function Vote({state}){
    const vote = async (event) => {
        event.preventDefault();
        const {contract} = state;
        const candidate = document.querySelector("#candidate").value;
        const voter = document.querySelector("#voter").value;
        try {
            const transaction = await contract.vote(candidate, voter);
            console.log("Transaction is done: ", transaction);
        }catch (error){
            console.log(error); 
        }
    }
    return (
        <form onSubmit = {vote}>
            <label>Candidate: </label>
            <input type='text' id='candidate' placeholder='Enter candidate name'/>
            <br/>
            <br/>
            <label>Voter: </label>
            <input
                type='text'
                id = 'voter'
                placeholder='Enter voter name'
            />
            <br/>
            <br/>
            <button
                type='submit'
                disabled = {!state.contract} 
            >Vote</button>
        </form>
    )
}

export default Vote;