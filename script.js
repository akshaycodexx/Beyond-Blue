const comment = document.getElementById("comment");
function showMore() {
    if (comment.style.visibility === 'hidden') {
        comment.style.visibility = 'visible';
        document.getElementById("more").textContent="expand_less";
        
    }
    else {
        
        comment.style.visibility = 'hidden';
        document.getElementById("more").textContent="expand_more";
        
    }
}
const comment2 = document.getElementById("commentBox2");
function showMore2() {
    if (comment2.style.visibility === 'hidden') {
        comment2.style.visibility = 'visible';
        document.getElementById("more2").textContent="expand_less";
        
    }
    else {
        
        comment2.style.visibility = 'hidden';
        document.getElementById("more2").textContent="expand_more";
    }
}
const comment3 = document.getElementById("commentBox3");
function showMore3() {
    if (comment3.style.visibility === 'hidden') {
        comment3.style.visibility = 'visible';
        document.getElementById("more3").textContent="expand_less";
        
    }
    else {
        
        comment3.style.visibility = 'hidden';
        document.getElementById("more3").textContent="expand_more";
    }
}

function closeSupportPage() {
    const supportPage = document.getElementById("supportPage");
    supportPage.style.visibility = "hidden";
}

// document.getElementById('closeBTN').addEventListener('click', function() {
//     window.close();
//     window.history.back();
// });
 