import Picture from '../images/mypic.jpeg';

const Header = ({option}) => {
    
    return (
      <header>
        <div className="ProfPic"></div>
        <img src={Picture} id="image1" alt="myProfilePhoto" />
        <h2>Hello There!</h2>
        <p id="bio">{option}</p>
      </header>
    );
  };
  
  export default Header;