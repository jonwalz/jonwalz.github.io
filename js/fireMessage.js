var contactFrom = document.getElementById('contact-form');
    var contactSuccess = document.getElementById('contact-success');
    var contactError = document.getElementById('contact-error');
    var sendBtn = document.getElementById('send-button');
    var onMessageComplete = function(error) {
      sendBtn.disabled = false;
      if (error) {
        contactError.innerHTML = 'Sorry. Could not send message.';
      } else {
        contactSuccess.innerHTML = "Message has been sent.";
        // hide the form
        contactFrom.style.display = 'none';
      }
    };
    function sendMessage(formObj) {
        // Store emails to firebase
        var myFirebaseRef = new Firebase("https://jonwalzemail.firebaseio.com/");
        myFirebaseRef.push({
          name: formObj.name.value,
          email: formObj.email.value,
          message: formObj.message.value
        }, onMessageComplete);
        sendBtn.disabled = true;
        return false;
    }