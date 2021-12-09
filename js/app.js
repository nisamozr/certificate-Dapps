function conectemetamasc(){
    ethereum.enable().then(result => {
        console.log("Account: ",result);
    })

}
$(document).ready(function () {
    web3 = new Web3(ethereum);
    console.log("Connection Object: ",web3)

    const contaracAddres = "0x72726A3865e5713f13F6fE92af9D2A2b29fFb945"
    const contractABI = [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "certificateDetails",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "date",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_certificateID",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_courseName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_candidateName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_grade",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_date",
                    "type": "string"
                }
            ],
            "name": "newCertificate",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]

    myContract = new web3.eth.contract(contractABI, contaracAddres);
    console.log('contract' , myContract)
})

function issueCertificate() {
    certificateID = document.getElementById("certificateID").value;
    courseName = document.getElementById("courseName").value;
    candidateName = document.getElementById("candidateName").value;
    grade = document.getElementById("grade").value;
    date = document.getElementById("date").value;
    
    myContract.methods.newCertificate(certificateID, courseName, candidateName, grade, date)
      .send({ from: ethereum.selectedAddress, gasLimit: "927000" }).then((txn) => {
        console.log(txn);
        alert("Certificate Issue with Number: " + certificateID);
      })
  }

