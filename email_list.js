var $ = function (id) {
    return document.getElementById(id);
};
var joinList = function() {
    var firstName = $("first_name").value;
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var isValid = true;
    
    
    if (firstName === "") {
        $("first_name_error").firstChild.nodeValue = "Dette felt er obligatorisk.";
        isValid = false;
    } else {
        $("first_name_error").firstChild.nodeValue = "";
    }
    
    if (emailAddress1 == "") {
        $("email_address1_error").firstChild.nodeValue = "Dette felt er obligatorisk.";
        isValid = false;
    } else {
        $("email_address1_error").firstChild.nodeValue = "";
    }
    
    if (emailAddress2 == "") {
        $("email_address2_error").firstChild.nodeValue = "Dette felt er obligatorisk.";
        isValid = false;
    } else if (emailAddress1 != emailAddress2) {
        $("email_address2_error").firstChild.nodeValue = "Dette felt skal være det samme som det første.";
        isValid = false;
    } else {
        $("email_address2_error").firstChild.nodeValue = "";
    }
    
        
    if (isValid) {
        $("email-form").submit();
    }
};
window.onload = function(){
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};