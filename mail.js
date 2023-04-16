function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        work: document.getElementById("work").value,
        address: document.getElementById("address").value,
    };
const serviceId = "service_dy2wnmg";
const templateId = "template_pt8j584";  
emailjs
    .send(serviceId,templateId,params)
    .then((res) =>{
        name: document.getElementById("name").value = "";
        name: document.getElementById("mobile").value = "";
        name: document.getElementById("work").value = "";
        name: document.getElementById("address").value = "";
        console.log(res);
        alert("Your message have submiited successfully");
    })
    .catch((err) => console.log(err));
}