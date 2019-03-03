// Init
const github = new GitHub();
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Search input event listener
searchUser.addEventListener("keyup", e => {
  // get input text
  const userText = e.target.value;
  if (userText !== "") {
    // console.log(userText);
    // Make http call
    github.getUser(userText).then(data => {
      //   console.log(data);
      if (data.profile.message === "Not Found") {
        // Show alert from ui.js
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // Show profile from ui.js
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile from ui.js
    ui.clearProfile();
  }
});
