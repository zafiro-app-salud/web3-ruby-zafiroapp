import { ethers } from './ethers-5.1.esm.min.js'

const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
const signer = provider.getSigner()
// const contract = new ethers.Contract(contractAddress, abi, signer);

// function to check if metamask is installed
var isMetamaskInstalled = () => ethereum.isMetamaskInstalled();

// function to check if metamask is connected to the current chain
var isMetamaskConnected = () => ethereum.isConnected();

// function to enable metamask if its disconnected
// const enableMetamask = async () => {
//     await ethereum.on('connect', (chainId) => {
//         console.log({ chainId })
//         console.log('Metamask Connected:', ethereum.isConnected())
//     })
// }

//  id de la cadena de bloques conectada - function to get metamask chainID
const getChainId = async() => {
    return await ethereum.request({ method: 'eth_chainId' })
}

// cual cadena de bloques me conecto-  function to get metamask networkId
const getNetworkId = async() => {
    return await ethereum.request({ method: 'net_version' })
}

// que cuenta esta conectada de metamask - function to get metamask account connected with dapp
const getAccount = async() => {
    try {
        let account = await ethereum.request({ method: 'eth_accounts' })
        return account
    } catch (error) {
        console.log('Error getting account:\n', error)
        return error
    }
}

// solicitar que se conecte a una cuenta en especifico - function to request metamask to connect with account
const connectToAccount = async() => {
    try {
        let account = await ethereum.request({ method: 'eth_requestAccounts' })
        return account
    } catch (error) {
        console.log('Error connecting to metamask account:\n', error)
        return error
    }
}

// seleccionar balance -  function to get the balance of the connected account
const getBalance = async() => {
    try {
        let account = await getAccount()
        if (account.length === 0) {
            return 'Connect to account first!'
        }

        let balance = await signer.getBalance()
        return ethers.utils.formatEther(balance) + ' CELO'
    } catch (error) {
        console.log('Error getting balance:\n', error)
        return error
    }
}

// configuracion incial para exportar a otros archivos

export default {
    signer,
    isMetamaskInstalled,
    isMetamaskConnected,
    getChainId,
    getNetworkId,
    getAccount,
    connectToAccount,
    getBalance
}