var abi;
var contractAddress;


abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "initialMessage",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "message",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
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
				"name": "newMessage",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

// direccion del contrato en la blockchian

contractAddress = '0x2594C4A55e2147d29c56797cFE81d54C22b38315';
const contract = new ethers.Contract(contractAddress, abi, signer);