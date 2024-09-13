const daysTag = document.querySelector(".days"),
      currentDate = document.querySelector(".current-date"),
      prevNextIcon = document.querySelectorAll(".icons span"),
      eventModal = document.getElementById('event-modal'),
      modalDate = document.getElementById('modal-date'),
      eventInput = document.getElementById('event-input'),
      saveEventBtn = document.getElementById('save-event'),
      closeModalBtn = document.querySelector('.close');


let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth(),
    selectedDate = null;

const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}" data-date="${currYear}-${currMonth + 1}-${i}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    document.querySelectorAll('.days li').forEach(day => {
        day.addEventListener('click', (e) => {
            selectedDate = e.target.getAttribute('data-date');
            modalDate.innerText = `Add event for: ${selectedDate}`;
            eventInput.value = '';
            eventModal.style.display = 'block';
        });
    });
};

renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear();
            currMonth = date.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    });
});

saveEventBtn.addEventListener('click', () => {
    const eventText = eventInput.value;
    if (eventText) {
        let events = JSON.parse(localStorage.getItem('calendarEvents')) || {};
        events[selectedDate] = eventText;
        localStorage.setItem('calendarEvents', JSON.stringify(events));
        eventModal.style.display = 'none';
        alert(`Event added for ${selectedDate}: ${eventText}`);
    } else {
        alert("Please enter an event.");
    }
});

closeModalBtn.addEventListener('click', () => {
    eventModal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == eventModal) {
        eventModal.style.display = 'none';
    }
};
