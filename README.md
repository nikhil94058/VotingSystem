# VotingSystem

## Abstract
Electronic voting or e-voting has been used in varying forms since 1970s with fundamental benefits over paper based systems such as increased efficiency and reduced errors. However, there remain challenges to achieve wide spread adoption of such systems especially with respect to improving their resilience against potential faults. Blockchain is a disruptive technology of current era and promises to improve the overall resilience of e-voting systems. This paper presents an effort to leverage benefits of blockchain such as cryptographic foundations and transparency to achieve an effective scheme for evoting. The proposed scheme conforms to the fundamental requirements for e-voting schemes and achieves end-to-end verifiability. The paper presents details of the proposed e-voting scheme along with its implementation using Multichain platform. The paper presents in-depth evaluation of the scheme which successfully demonstrates its effectiveness to achieve an end-to-end verifiable e-voting scheme.
## 1. Introduction

### 1.1 Project and its significance
Elections are fundamental pillar of a democratic system enabling the general public to express their views in the form of a vote. Due to their significance to our society, the election process should be transparent and reliable so as to ensure participants of its credibility. Electronic voting or e-voting has a profound role in this. From a stakeholders’ standpoint, a blockchain based electronic voting technology can boost voter participation and confidence and rekindle interest in the voting system.

### 1.2 Overview of Blockchain
Blockchain is one of the emerging technologies with strong cryptographic foundations enabling applications to achieve resilient security solutions. It is primarily a distributed decentralized database that maintains a complete list of constantly germinating and growing data records secured from unauthorized manipulating, tampering and revision. It allows every user to connect to the network, send new transactions to it, verify transactions and create new blocks.

The focus of our project is to investigate the key issues such as voter anonymity, vote confidentiality and end-to-end verification. In this paper, we present our efforts to explore the use of the blockchain technology to seek solutions to these issues. Blockchain-based Digital Voting System aims to design a voting system based on conditions imposed by written smart contract and deployed on a blockchain. It will make the system more convenient and cost effective for government to conduct voting throughout the nation as well as benefit other stakeholders.  


## 2. Problem Statement
Conventional voting system is based on paperwork. Sometimes paper work goes missing and people are removed from voting. There is lack of transparency and security. Building a secure electronic voting system that offers the fairness and privacy of current voting schemes, while providing the transparency and flexibility offered by electronic systems has been a challenge for a long time. Existing solutions have not exactly dealt with the problem like: securing authentication via an identity verification service; providing transparency, in the form of a verifiable assurance to each voter that their vote was counted, without risking the voter's privacy; preventing any third party from tampering with any vote.


## 3. Breakdown of the Problem
The physical voting is very costly and high maintenance job. Various special purpose computers are used for the voting and the counting process. Even the transportation of those equipments cost the time, man- power and money. Tampering also comes to play the role where there is human force. Hence, it is very tedious job to make sure that the voting should be fairly taken. In current scenario, manual voting system also takes lot of time to declare result. Hence, by implementing blockchain technology in online voting system, we can save the time, money as well as the labour needed for the chore. Security is maintained as decentralization method is immutable and validators validate and verify transactions transparently.


## 4. Research
We have studied the system by which the Government Elections are conducted in India. We have understood the upsides and flaws of the system of physical voting by contacting a few Election Officers. We have also surfed through various websites to estimate the cost of the election and labour required. The voting system which is present and used widely is the physical voting system. There are several online voting systems as well but since physical voting provides many rounds of verification and confirmation, it is for now, the best option we have for mass voting.

The loopholes which are there in the existing solution is that a lot of human intervention is needed in the voting system. Hence, there is a fair chance of tampering and mishandling the voting equipments. The blockchain technology will provide everything that is lacking in the current system that is security, transparency and immutability.


## 5. Solution Architecture
- Registration Phase: The Voter has to Register itself first with its unique ID and attributes such as name, roll number, and mobile number. All this data is stored in the database.
- Login: The voter, after registration, logs in using a password. After successful login, to cast their
vote, the voter has to authenticate themselves. Real-time OTP verification is used forenhanced security.
- Blockchain Technology: Blockchain provides a secure and transparent environment. It encrypts the voter message (casted vote) using an asymmetric encrypting algorithm. A public key is provided by
Blockchain, and the private key is with the host. Public key is used for verification by the ledger.
- Database: User database is stored in a MySQL database, containing details like name, gender, and unique ID.
- Ethereum Network: Ethereum network provides a framework for blockchain creation and storage. Every blockis created and its details are stored in an encrypted ledger, distributed among nodes for high fault tolerance.
- Result Phase: The processing and tallying of votes are done in the results phase. Results are generated and displayed on the website. Users can verify their votes using their public key, providing transparency to the voting system.


## 6. Blockchain Technology
We will be using Ethereum blockchain to build and deploy smart contracts to define rules of election, manage voter eligibility and record votes. Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts. Ethereum blockchain is highly secure, employing robust cryptographic algorithms and consensus mechanisms to protect against unauthorized access and data tampering. This security ensures that votes remain confidential and tamper-proof throughout the voting process. Ethereum transactions are processed quickly, which means that vote tallying can be faster and more efficient compared to manual counting.


## 7. Frontend + Backend Development
The frontend part will be started by designing the UI of the software. The frontend components would contain the homepage, Sign-in Page for the operator assigned by the official and a Voting Page where the votes can be casted. Alert screens and pops can be implemented as when required by the project. - Login Page: Login using credentials provided by the admin.
- Voter registration: Voters can register to vote by providing their personal information and
identification documents to the front end. The front end then sends the voter's information to the backend for verification.
- Ballot casting: Voters can cast their ballots by selecting the candidates of their choice from the front end. The front end then encrypts the voter's ballot and sends it to the backend.
- Viewing voting records: Voters can view their voting records on the front end. This includes information such as whether the voter has registered to vote, whether they have cast their ballot, and the status of their ballot.
- Post-election analysis: Blockchain-based e-voting systems can generate detailed reports and analytics on voter turnout, voting patterns, and other election data. This data can be used to improve the voting pr

The backend contains the smart contracts for the constraints and condition implementations, database for
storing the information of the voter and the candidate and the frameworks like EtherJS.


## Tech Stacks required :
For frontend: ReactJs , Tailwind CSS, Material UI , Ul kit
Blockchain(smart contracts) : Solidity
Blockchain Interaction Tools: Web3.js
Databases : MySql (AWS),
Server : Express.js
Version Control : Git
## 8. Smart Contract
Smart contracts are programmable contracts that automatically execute when pre-defined conditions are met. Like conventional written contracts, smart contracts are used as a legally binding agreement between parties. Smart contracts automate transactions and allow parties to reach agreements directly and automatically, without the need for a middleman. Key benefits of smart contracts compared to conventional written contracts are cost saving, enhanced efficiency and risk reduction. Smart contracts redefine trust, as contracts are visible to all the users of the blockchain and can, therefore, be easily verified.

In this work, we define our e-voting system based on smart contract. Smart contracts will be responsible for the following tasks:
- Registering candidates
- Registering voters
- Creating elections
- Casting and counting votes
- Declaring winners

It will be used to facilitate secure and tamper-proof casting and automate the vote counting process. Smart contracts can be used to implement dispute resolution mechanisms in case of any discrepancies in the voting process.
## 9. Roadmap
System roadmap includes database design, frontend development, backend development, blockchain integration, and security testing.
Database Design -> Frontend Development -> Backend Development -> Blockchain Integration -> Security and Testing -> Deployment in Real World.
9.1 Database: Design and implement a database to store voter and candidate information.
9.2 Frontend: Develop a user-friendly UI and integrate with the backend.
9.3 Backend: Implement voting logic, security features, and deploy.
9.4 Blockchain: Integrate a smart contract and deploy to the Ethereum blockchain.
9.5 Security: Conduct audits and comprehensive testing before deployment.

Blockchain-based e-voting system proposed to address challenges of conventional systems, such as lack of transparency, security, and cost-effectiveness. System leverages key benefits of blockchain technology, such as cryptographic foundations and transparency, to achieve effective and verifiable e-voting scheme. System architecture includes registration, login, blockchain, database, Ethereum network, result phase, and frontend/backend development. System will be developed using ReactJS, Node.js, Express.js, Ethereum,and Solidity. System will be deployed on Ethereum blockchain, which offers security, transparency, and decentralization. System roadmap includes database design, frontend development, backend development, blockchain integration, and security testing. Proposed system has potential to revolutionize elections by making them more secure, transparent, and cost-effective.


## Team Members:
1. Siddharth Shukla (POC)
2. Divyansh Srivastava
3. Shreya Jha
4. Mitali Dixit
5. Deepak
6. Harsh Vardhan Patel
7. Nikhil Kumar Das
8. Satyam
9. Akshay Pandey
10. Shivani Parasar
11. Govind Singh


## References:
1. https://www.electionlab.mit.edu/
2. https://www.evotingindia.com/
3. https://www.ibm.com/topics/blockchain