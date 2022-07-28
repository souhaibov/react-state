import React from "react";
import "./App.css";
import Timer from "./Timer";

class Welcome extends React.Component {
  state = {
    fullName: "Souhaib Salem",
    bio: "Metouia",
    imgSrc: "https://avatars.githubusercontent.com/u/100449000?v=4",
    profession: "Chess Trainer and Web developper",
    show: false,
  };
  handleClick = () => this.setState({ show: !this.state.show });

  render() {
    return (
      <div>
        <button className="button" onClick={this.handleClick}>
          {" "}
          Show State{" "}
        </button>
        {this.state.show ? (
          <div>
          <div className="profile">
            <img className="photo" src={this.state.imgSrc} alt="my_photo"></img>
            <div className="info">
              <h1>Name : {this.state.fullName}</h1>
              <h1>Location : {this.state.bio}</h1>
              <h1>Profession : {this.state.profession}</h1>
            </div>
          </div>
          <Timer />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Welcome;

// const App = () => {
//   const person={ fullName: "Sara",
//   bio: "Metouia",
//   imgSrc: "https://avatars.githubusercontent.com/u/100449000?v=4",
//   profession: "Chess Trainer"}
//   const [show, setShow] = useState(false)
//   return (
//     <div>
//       <button onClick={()=>setShow(!show)}> Show State </button>
//      {show ? <h1>{person.fullName}</h1> : null}</div>
//   )
// }
