import React from "react";

export default class Class extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
      console.log("Mounting...");
    }, 2000);
  }

  // shouldComponentUpdate() {
  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   if (prevState === this.state.color) {
  //     return { lastVehicle };
  //   }
  //   return null;
  // }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ color: "blue" });
      console.log("Updating...");
    }, 4000);
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ color: "green" });
      console.log("Unmounting...");
    }, 8000);
  }
  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    // console.log("renderd");

    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.props.prop1}</h1>
      </div>
    );
  }
}

// pure components , higher order components , error boundries => usecase, lifecycle methods
