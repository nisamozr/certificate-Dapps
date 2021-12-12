function conectemetamasc(){
    ethereum.enable().then(result => {
        console.log("Account: ",result);
    })

}

    web3 = new Web3(ethereum);
    console.log("Connection Object: ",web3)

    const contaracAddres ="0x09f4D7fc561Ef4435e438ddC1423b6c8093c9364"
    //  
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
   var  myContract = new web3.eth.Contract(contractABI,contaracAddres);
    console.log('contract' , myContract)


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
  function getCertificateDetails() {
    certificateID = document.getElementById("certificateID").value;
    myContract.methods.certificateDetails(certificateID)
      .call({ from: ethereum.selectedAddress })
      .then((result) => {
        console.log(result);
        localStorage.setItem("certificateID", certificateID);
        localStorage.setItem("candidateName", result.candidateName);
        localStorage.setItem("courseName", result.courseName);
        localStorage.setItem("grade", result.grade);
        localStorage.setItem("date", result.date);

        var url = "certificate.html";
        window.location.href = url;
      })
  }

