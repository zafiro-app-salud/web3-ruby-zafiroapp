function wallet_info(){
    Swal.fire({
    icon: 'question',
    title: 'Como Conectarse',
    text: 'Debes tener una billetera web3, desde esta se gestiona su identidad en el sistema Blockchain y se firman las transacciones.',
    footer: '<a target="_blank" href="https://www.metamask.io">Descargar Metamask</a>'
    })
}
function copy_address(){
    console.log("copying..........")

        /* Get the text field */
        var copyText = document.getElementById("showAccount").innerHTML;

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);

        /* Alert the copied text */
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Dirección Copiada',
        showConfirmButton: false,
        timer: 1500
        })
        console.log("copy done")
}
