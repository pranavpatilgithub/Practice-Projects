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

    if (localStorage.getItem('issues') === null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }
    document.getElementById('inputForm').reset();
    fetchIssue();

}

function setStatusClosed(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));
    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id === id) {
            issues[i].status = 'Closed';
        }
    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssue();
}

function deleteIssue(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));
    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id === id) {
            issues.splice(i, 1);
        }
    }
    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssue();
}

function fetchIssue() {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issueList = document.querySelector(".issueList");
    issueList.innerHTML = '';

    if(issues.length == 0){
        issueList.innerHTML = `<p style="color: red;"> No record found </p>`
    }
    else{
        for (var i = 0; i < issues.length; i++) {
            var id = issues[i].id;
            var desc = issues[i].description;
            var severity = issues[i].severity;
            var assignTo = issues[i].assignTo;
            var status = issues[i].status;
    
            issueList.innerHTML += `
                <div class="card">
                    <p>ID : ${id}</p>
                    <div class="wrapper-2">
                        <div class="div1">
                            <h2>${desc}</h2>
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
        }
    }
}
