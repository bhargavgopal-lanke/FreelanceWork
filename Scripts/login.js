function addPlaceholder(name) {
  const loginDate = document.getElementById("loginDate");
  const lastlogindate = document.getElementById("lastlogindate");
  console.log("working", name);
  if (!loginDate.value || !lastlogindate.value) {
    if (name === "lastlogindate") {
      lastlogindate.type = "text";
      lastlogindate.placeholder = "Last Login Date";
    } else {
      loginDate.type = "text";
      loginDate.placeholder = "Login Date";
    }
  }
}

function removePlaceHolder(name) {
  const loginDate = document.getElementById("loginDate");
  const lastlogindate = document.getElementById("lastlogindate");

  if (name === "lastlogindate") {
    lastlogindate.type = "date";
  } else {
    loginDate.type = "date";
  }
}

addPlaceholder("lastlogindate");
addPlaceholder("loginDate");
