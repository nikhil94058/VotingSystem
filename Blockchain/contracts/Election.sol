// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8.0;
contract Election {

    // Voters Information
    struct Voter {
        string name;
        address number_id;
        bool hasVoted;
        address votedFor;
    }

    // Candidate Information
    struct Candidate {
        string party;
        address numberid;
        uint voteCount;
    }

    // Dynamic array to store candidates
    Candidate[] public candidates;

    // Dynamic array to store voters
    Voter[] public voters;

    // Declaration of Admin
    address public admin;

    // Total votes casted
    uint public totalVotes;

    constructor() {
        admin = msg.sender;
    }

    // Modifier for checking Admin is Same Or Not
    modifier owner() {
        require(msg.sender == admin, "Access Denied, Enter correct details for Admin.");
        _;
    }

    // Modifier is checking for candidates register ones only for the same address
    modifier onlyOneCandidate(address _numberid) {
        require(_numberid != admin, "Admin and Candidate have the same Address");
        uint count = 1;
        if (candidates.length >= 1) {
            for (uint i = 0; i < candidates.length; i++) {
                if (candidates[i].numberid == _numberid) {
                    count = count + 1;
                }
            }
        }
        require(count <= 1, "Invalid Doubled Registration");
        _;
    }

    //Modifier check for Voter
    modifier onlyOneVoter(address _numberid) {
        require(_numberid != admin, "Admin and Voter have the same Address");
        uint count = 1;
        uint i = 0;
        if (voters.length >= 1) {
            for (i = 0; i < voters.length; i++) {
                if (voters[i].number_id == _numberid) {
                    count++;
                }
            }
        }
        require(count <= 1 , "Invalid Doubled Registration");
        _;
    }

    // Event to signal the registration of a new candidate
    // By Deepak
    function registerCandidate(string memory _name, address _numberid) public owner onlyOneCandidate(_numberid) {
    Candidate memory newCandidate = Candidate({party: _name, numberid: _numberid, voteCount: 0});
    candidates.push(newCandidate);

    // Emit event for candidate registration
    }

    function viewCandidate() public owner view returns (Candidate[] memory) {
        return candidates;
    }

    function viewVoter() public owner view returns (Voter[] memory) {
        return voters;
    }



    // Event to signal the registration of a new voter
    // Voter Registration
    function registerVoter(string memory _name, address _number_id) public owner onlyOneVoter(_number_id){
        Voter memory newVoter = Voter(_name, _number_id, false, msg.sender);
        voters.push(newVoter);

        // Emit event for voter registration
    }

    // Voting
    function vote(address _candidateAddress, address _voterAddress) public{
        
    uint voterIndex;
    for (uint i = 0; i < voters.length; i++) {
        if (voters[i].number_id == _voterAddress) {
            voterIndex = i;
            break;
        }
    }

    require(voterIndex < voters.length, "Voter not found.");

    Voter storage voter = voters[voterIndex];
    require(!voter.hasVoted, "The voter has already voted.");

    bool candidateFound = false;
    for (uint i = 0; i < candidates.length; i++) {
        if (candidates[i].numberid == _candidateAddress) {
            candidateFound = true;
            voter.hasVoted = true;
            voter.votedFor = _candidateAddress;
            candidates[i].voteCount++;

            // Increment totalVotes when a vote is casted
            totalVotes++;
            break;
        }
    }

    require(candidateFound, "Invalid candidate.");
    }

    
    function getVotes(address _candidateAddress) public owner view returns (uint) {
    // bool candidateFound = false;
    uint i;

    for ( i = 0; i < candidates.length; i++) {
        if (candidates[i].numberid == _candidateAddress) {
            // candidateFound = true;
            break;
        }
    }


    require(i < candidates.length, "Invalid candidate.");
    return candidates[i].voteCount;
    }  



    
    // Getting the winner of the election
    function getYourWinner() public owner view returns (string memory) {
        string memory winnerId = "";
        uint maxVotes = 0;
        for (uint i = 0; i < candidates.length; i++) {
            if (candidates[i].voteCount > maxVotes) {
                maxVotes = candidates[i].voteCount;
                winnerId = candidates[i].party;
            }
        }
        require(keccak256(abi.encodePacked(winnerId)) != keccak256(abi.encodePacked("")), "Invalid Candidate" );
        return winnerId;
    }


    // Function to calculate the percentage of votes for a candidate
    function getPercentageForCandidate(string memory party) public owner view returns (uint256) {
        uint count = 0;
        uint i;
        for (i = 0; i < candidates.length; i++) {
            if (keccak256(abi.encodePacked(candidates[i].party)) == keccak256(abi.encodePacked(party))) {
                count++;
            }
        }
        

        // Calculate the percentage using the formula
        require(totalVotes != 0, "Voting is not started");
        return (count * 100) / totalVotes;
    }
}