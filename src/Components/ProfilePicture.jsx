function ProfilePicture(){
    const imageURl = "./src/assets/vite.svg";
    
    const handleClick = (e) => e.target.style.display = "none";
    return(
        <img src={imageURl} className="logo" onClick={(e) => handleClick(e)}/>
    );
}
export default ProfilePicture;