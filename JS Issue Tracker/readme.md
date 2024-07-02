# JavaScript Issue Tracker

This is a simple web-based issue tracker implemented in JavaScript, HTML, and CSS. It allows users to add, manage, and update issues using local storage.

## Features

- **Add New Issue**: Users can submit a form to add a new issue with a unique ID generated using Chance.js.
- **View Issues**: Issues are displayed in a list format with details such as description, severity, assigned user, and status (open or closed).
- **Manage Issues**: Each issue card includes buttons to close an issue or delete it permanently.
- **Local Storage**: Issues are stored locally using `localStorage`, ensuring persistence between sessions.

## Technologies Used

- **JavaScript**: Core language used for functionality such as adding, updating, and deleting issues.
- **HTML**: Markup language for creating the structure of the issue tracker interface.
- **CSS**: Styling to enhance the user interface and improve readability.
- **Chance.js**: Used to generate unique IDs for each issue.

## Usage

1. **Add New Issue**:
   - Fill out the form with a description, severity, and assignee.
   - Click "Submit" to add the issue. A unique ID is generated automatically.
   
2. **Manage Issues**:
   - Each issue card displays options to close the issue or delete it.
   - Closing an issue changes its status to "Closed".
   - Deleting an issue removes it from the list permanently.

3. **View Issues**:
   - Issues are displayed in a card format, showing key details.
   - If no issues are present, a message indicating no records found is displayed.

## Setup

To run the issue tracker locally:

1. Clone this repository to your local machine.
2. Open `index.html` in a web browser.

## Example Code Snippet

```javascript
document.querySelector("#inputForm").addEventListener("submit", saveIssue);

function saveIssue(e) {
    e.preventDefault(); // Prevent form from submitting

    var issueId = chance.guid();
    var issueDesc = document.getElementById("desc").value;
    var issueSeverity = document.getElementById("severity").value;
    var issueAssignedTo = document.getElementById("assignedTo").value;
    var issueStatus = 'Open';

    var issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignTo: issueAssignedTo,
        status: issueStatus
    }

    var issues = getIssues();
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));

    document.getElementById('inputForm').reset();
    fetchIssue();
}

// Function to fetch issues from localStorage
function fetchIssue() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issueList = document.querySelector(".issueList");
    issueList.innerHTML = '';

    if (issues.length === 0) {
        issueList.innerHTML = `<p style="color: red;"> No record found </p>`;
    } else {
        issues.forEach(issue => {
            var { id, description, severity, assignTo, status } = issue;
            issueList.innerHTML += `
                <div class="card">
                    <p>ID : ${id}</p>
                    <div class="wrapper-2">
                        <div class="div1">
                            <h2>${description}</h2>
                        </div>
                        <div class="div2">
                            <p>Status : ${status}</p>
                            <p>Severity : ${severity}</p>
                            <p><i class='bx bxs-user'></i>${assignTo}</p>
                        </div>
                    </div>
                    <div class="btns">
                        <a href="#" onclick="setStatusClosed('${id}')" id="close">Close</a>
                        <a href="#" onclick="deleteIssue('${id}')" id="delete">Delete</a>
                    </div>
                </div>`;
        });
    }
}

// Function to update badge count
function updateBadge(n) {
    var text = document.querySelector("#badge");
    text.innerHTML = n;
}

// Function to get issues from localStorage
function getIssues() {
    return localStorage.getItem('issues') ? JSON.parse(localStorage.getItem('issues')) : [];
}

