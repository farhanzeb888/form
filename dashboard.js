// 🔐 Protect Dashboard
if(localStorage.getItem("isLoggedIn") !== "true"){
  window.location.href = "form.html";
}

// ✅ Show Current User Info
const user = JSON.parse(localStorage.getItem("currentUser"));
if(user){
  document.getElementById("userName").innerText = user.name;
  document.getElementById("userEmail").innerText = user.email;
  document.getElementById("userCreated").innerText = user.createdAt;
}

// 🔒 Logout
document.getElementById("logOut").addEventListener("click", ()=>{
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "form.html";
});
