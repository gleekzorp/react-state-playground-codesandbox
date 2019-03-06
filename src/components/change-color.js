// import React, { Component } from "react";

// export default class ChangeColor extends Component {
//   constructor() {
//     super();

//     this.state = {
//       value: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       value: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";

// export default class ChangeColor extends Component {
//   constructor() {
//     super();

//     this.state = {
//       id: "Black",
//       color: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       id: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     this.setState({
//       color: this.target.id
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Pick A Color</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input type="text" onChange={this.handleChange} />
//           </label>
//           <h1 style={{ color: this.state.id }}>{this.state.id}</h1>
//         </form>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class ChangeColor extends Component {
  constructor() {
    super();

    this.state = {
      id: "Black"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      id: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      color: this.target.id
    });
  }
  render() {
    return (
      <div>
        <h1>Pick A Color</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" onChange={this.handleChange} />
          </label>
          <h1 style={{ color: this.state.id }}>{this.state.id}</h1>
        </form>
      </div>
    );
  }
}

// import React, { Component } from "react";

// export default class ChangeColor extends Component {
//   constructor() {
//     super();

//     this.state = {
//       color: "Black",
//       info: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       info: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     this.setState({
//       color: this.state.info
//     });
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <div>
//         <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               type="text"
//               value={this.state.info}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }
