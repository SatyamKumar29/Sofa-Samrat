function sendWhatsApp(){

    const name = document.getElementById('nameInput').value
    const phone = document.getElementById('phoneInput').value
    const service = document.getElementById('serviceInput').value
    const message = document.getElementById('messageInput').value

    if(!name || !phone){
        alert('please fill your name and phone number')
        return
    }

    const text = 
    `Hello Sofa Samrat ! 

        Name: ${name} 
        Phone: ${phone} 
        Service Needed: ${service} 
        Message: ${message}
    
     Please get back to me soon !`

    window.open('https://wa.me/919876543210?text=' + encodeURIComponent(text), '_blank')


}