// Init
const github = new GitHub();

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
      } else {
        // Show profile from ui.js
      }
    });
  } else {
    // Clear profile from ui.js
  }
});
