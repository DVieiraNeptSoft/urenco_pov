if (!xhr.responseJSON.length) {
    globalThis.issueId = 1;
} else {
    globalThis.issueId = parseInt(xhr.responseJSON[0].ISSUE_ID) + 1;
}