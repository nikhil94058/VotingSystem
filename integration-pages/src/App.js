
import React, { useEffect, useState } from 'react';
import abi from "./integration/abi/Election.json";
import RegisterVoter from './integration/RegisterVoter.js';
import RegisterCandidate from './integration/RegisterCandidate.js';
import Vote from './integration/Vote.js';
import {GetVotes}  from './integration/GetVotes.js';
import { GetYourWinner } from './integration/GetYourWinner.js';
import { GetPercentageForCandidate } from './integration/GetPercentageForCandidate.js';
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
      const contractAddress = "0xbE73Cb4667247C9c4BdeA1e8C70F32E6c6E0413B";
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
          <h1>Get Vote Count</h1>
          <GetVotes state = {state}/>
          <h1>Get Your Winner</h1>
          <GetYourWinner state = {state}/>
          <h1>Get Percentage of Candidate</h1>
          <GetPercentageForCandidate state = {state}/>
      </div>
  );
}

export default App;
