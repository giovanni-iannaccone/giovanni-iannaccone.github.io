async function showProfilePic() {
    const url = "https://github.com/giovanni-iannaccone.png";
    const imgTag = document.getElementById("profile-pic");
    imgTag.setAttribute("src", url);
}

showProfilePic();