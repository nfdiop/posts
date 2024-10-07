import { Component } from "react";

// Class component
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <>Hi {this.props.user}</>
        {/* // TODO */}
      </div>
    );
  }
}

// Missing ()
function Dashboard({ user }) {
  return
    <div>
      <h1>Dashboard</h1>
      <>Hi {user}</>
    </div>
  ;
}


// 54. Not using camelCase for styles
function Dashboard({ children }) {
  return (
    <div
      style={{ "background-color": "gold" }}
    >
      <h1>Dashboard</h1>
      {children}
    </div>
  );
}

// 55. Forgetting to use curly brackets when destructuring props
function BlogPost(title, content) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

// 56. Not writing aria-label properly
function Header({ title, onClose }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button
        onClick={onClose}
        ariaLabel="Close"
      >
        X
      </button>
    </div>
  );
}
