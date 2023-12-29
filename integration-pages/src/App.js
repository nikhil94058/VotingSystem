
import React, { useEffect, useState } from 'react';
import abi from "./integration/abi/Election.json";
import RegisterVoter from './integration/RegisterVoter.js';
import RegisterCandidate from './integration/RegisterCandidate.js';
import Vote from './integration/Vote.js';
const ethers = require('ethers');

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  }); 
  const [account, setAccount] = useState("None");
  useEffect(() => {
    async function WalletConnection() {
      const contractAddress = "0xC42F04315C41f48E6bEa0941381E4f423799Fc45";
      const contractABI = abi.abi;
      try {
          const {ethereum} = window;
          if (ethereum){
              const account = await ethereum.request({
                  method: "eth_requestAccounts",
              });
              window.ethereum.on("chainChanges", () => {
                  window.location.reload();
              });
              window.ethereum.on("accountChanged", () => {
                  window.location.reload();
              });
              const provider = new ethers.providers.Web3Provider(window.ethereum);
              const signer = provider.getSigner();
              const contract = new ethers.Contract(contractAddress, contractABI, signer);
              setState({provider, signer, contract});
              setAccount(account);
              // console.log(state);
              
            }
            else {
              alert("Please install Metamask");
          }
        }
      catch (error){
        console.log(error);
      }
    }
    WalletConnection();
  }, []);
  return(
      <div className="App">
          <p>Connected Account: {account}</p>
          <h1>Registration for Candidate</h1>
          <RegisterCandidate state = {state}/>
          <h1>Registration for Voter</h1>
          <RegisterVoter state = {state}/> 
          <h1>Vote</h1>
          <Vote state = {state}/>
      </div>
  );
}

export default App;
