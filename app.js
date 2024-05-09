var attendanceForm = document.getElementById("attendanceForm");

// Add an event listener to the form for the "submit" event
attendanceForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Call the function to mark attendance
    markAttendance();
});

function markAttendance() {
    var name = document.getElementById("name").value;
    var dateTime = new Date();
    var date = `${dateTime.getFullYear()}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getDate().toString().padStart(2, '0')}`;
    var time = `${dateTime.getHours().toString().padStart(2, '0')}:${dateTime.getMinutes().toString().padStart(2, '0')}:${dateTime.getSeconds().toString().padStart(2, '0')}`;
    var attendanceRow = `
    <tr>
        <td>${name}</td>
        <td>${date}</td>
        <td>${time}</td>
    </tr>
`
    document.getElementById("attendanceBody").insertAdjacentHTML("beforeend", attendanceRow);
    document.getElementById("name").value = ''; // Clear input field after marking attendance
}







// function markAttendance() {
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; // Format the time as HH:MM

//     var listItem = document.createElement("div");
//     listItem.classList.add("attendance-item");

//     if (hours < 10 || (hours === 10 && minutes <= 30)) {
//         listItem.textContent = `Attendance marked at ${time}. Good job!`;
//     } else {
//         listItem.textContent = `Attendance marked at ${time}. You're late!`;
//     }

//     document.getElementById("attendanceList").appendChild(listItem);
// }





// function markAttendance() {
//     var name = document.getElementById("nameInput").value;
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`; // Format the time as HH:MM
//     // var da = date.getDate?
//     var listItem = document.createElement("div");
//     listItem.classList.add("attendance-item");

//     if (hours < 10 || (hours === 10 && minutes <= 30)) {
//         listItem.textContent = `${name} arrived at ${time} $. Good job!`;
//     } else {
//         listItem.textContent = `${name} arrived at ${time}. You're late!`;
//     }

//     document.getElementById("attendanceList").appendChild(listItem);
// }











































// function markAttendance() {
//     const name = document.getElementById("nameInput").value;
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes};` // Format the time as HH:MM
//     // var da = date.getDate?
//     const listItem = document.createElement("div");
//     listItem.classList.add("attendance-item");

//     if (hours < 10 || (hours === 10 && minutes <= 30)) {
//         listItem.textContent = `${name} arrived at ${time}. Good job!;`
//     } else {
//         listItem.textContent = `${name} arrived at ${time}. You're late!;`
//     }

//     document.getElementById("attendanceList").appendChild(listItem);
// }