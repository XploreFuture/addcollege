function generateParagraph() {
    let Collegename = document.getElementById('Collegename').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let established = document.getElementById('established').value;
    let Typeofcollege = document.getElementById('Typeofcollege').value;
    let appaff = document.getElementById('appaff').value;
    let appaffby = document.getElementById('appaffby').value;
    let Stream = document.getElementById('Stream').value;
    let Courseoffered = document.getElementById('Courseoffered').value;
    let Popularcourse = document.getElementById('Popularcourse').value;
    let Entranceexam = document.getElementById('Entranceexam').value;
    let Highestpackage = document.getElementById('Highestpackage').value;
    let Averagepackage = document.getElementById('Averagepackage').value;
    let Toprecruiter = document.getElementById('Toprecruiter').value;

    // Gather courses from the table
    let courseTable = document.getElementById('courseTable').getElementsByTagName('tbody')[0];
    let courses = [];
    for (let i = 0; i < courseTable.rows.length; i++) {
        let cells = courseTable.rows[i].cells;
        let course = `<tr><td>${cells[0].innerText}</td><td>${cells[1].innerText}</td></tr>`;
        courses.push(course);
    }
    let coursesTableHtml = `<table border="1"><thead><tr><th>Course</th><th>Fee</th></tr></thead><tbody>${courses.join('')}</tbody></table>`;

    // Constructing the paragraph with headings
    let paragraph = `<h3>Info</h3><br>${Collegename}, ${city}, ${state} established in year ${established} ranked as the best ${Stream} college of India. This is a ${Typeofcollege} ${appaff} by ${appaffby}.<br><br>`;
    paragraph += `${Collegename} has various departments in the ${Courseoffered} Program. ${Popularcourse} is a popular course in the institute. Admission to the college is done by ${Entranceexam}.<br><br>`;
    paragraph += `<h3>Courses and Fees</h3><br>The courses of the ${Courseoffered} Program offered by the institute are: <br>${coursesTableHtml}<br><br>`;
    paragraph += `<h3>Placement</h3><br>The placement cell of ${Collegename} has made an impeccable impression on the industry by forging a right balance between academics and industry. The highest package offered by the recruiter is ${Highestpackage}. The average package provided by the institute is ${Averagepackage}.<br><br>`;
    paragraph += `<h3>Top Recruiter</h3>Top recruiters include ${Toprecruiter}.<br><br>`;

    // Display the generated paragraph
    document.getElementById('generatedParagraph').innerHTML = paragraph;
}

function addCourse() {
    // Get input values
    var courseName = document.getElementById("courseName").value;
    var courseFee = parseFloat(document.getElementById("courseFee").value);

    // Validate input
    if (courseName.trim() === "" || isNaN(courseFee) || courseFee <= 0) {
        alert("Please enter valid course name and fee.");
        return;
    }

    // Create new row in the table
    var table = document.getElementById("courseTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Add data to cells
    cell1.textContent = courseName;
    cell2.textContent = courseFee.toFixed(2); // Display fee with 2 decimal places

    // Clear input fields
    document.getElementById("courseName").value = "";
    document.getElementById("courseFee").value = "";
}
