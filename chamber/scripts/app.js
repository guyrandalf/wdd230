let menuToggle = document.getElementById('hamburger')
let menuToggleSpan = document.querySelector('span')
let nav = document.querySelector('.bottom')

menuToggle.onclick = () => {
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block'
        menuToggleSpan.classList.remove('menu-button')
        menuToggleSpan.classList.add('closing')
    } else {
        nav.style.display = 'none'
        menuToggleSpan.classList.remove('closing')
        menuToggleSpan.classList.add('menu-button')
    }
}

const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay >= 1 && currentDay <= 3) {  

  const meetingField = document.querySelector(".meeting-notice");  
    
  const closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.textContent = "❌ Close";
  closeButton.setAttribute("title", "Click to close");

  const message = document.createElement("p");
  message.textContent = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

  meetingField.appendChild(closeButton);
  meetingField.appendChild(message);
  
  document.body.appendChild(meetingField);

  closeButton.addEventListener("click", function() {
    meetingField.style.display = "none";
  });
}


let currentdate = document.lastModified;
document.getElementById(
    "lastModified"
).textContent = `Last Updated: ${currentdate}`;