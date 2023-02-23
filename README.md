Pure components :

If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself.

usecase: PureComponent Is Primarily Used for Performance Optimization.

---

Higer Order Components:

A higher-order component is a function that takes a component and returns a new component.

---

Error Boundries:

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

---

React Lifecycles:

1. cunstroctor();

   The constructor takes in props as an object.

   constructor(props) {
   super(props); ---> we have to call the parent class through "super".
   this.state = { color: "red" };
   }

2. getDerivedStateFromProps();

   it is a static method and so you cannot use this inside of it.

   static getDerivedStateFromProps(props, state) {
   if(props.name !== state.name){
   return{
   name: props.name
   };
   }
   return null;
   }

!---> These two methods are running before the render();

3. render();

   This is the most important method of any React class, the whole work that is going to appear in the DOM is done here as it outputs the JSX of your component.

   render(){
   console.log("render method is called here");
   return <div>Hello world!</div>
   }

---

4. componentDidMount();

   This method is called immediately after the render method call as soon as the component is mounted. Inside this method is where we are allowed to do all the behind the scenes work you need without the DOM. These things can range from setting state, initializing and loading data and even adding event listeners.

   componentDidMount() {
   setTimeout(() => {
   this.setState({ color: "yellow" });
   console.log("Mounting...");
   }, 2000);
   }

---

5. shouldComponentUpdate();

   shouldComponentUpdate is give permission to componentDidUpdate. It always returns boolean value.

   shouldComponentUpdate() {
   return true;
   }

---

6. getSnapshotBeforeUpdate();

   It is a kind of screenshot of what the previous state and props looks like before updating, a genius method by React.

   getSnapshotBeforeUpdate(prevProps, prevState){}

---

7. componentDidUpdate();

   This is the next method that gets called immediately after the getSnapshotBeforeUpdate method, right after a DOM update.

   componentDidUpdate() {
   setTimeout(() => {
   this.setState({ color: "blue" });
   console.log("Updating...");
   }, 4000);
   }

---

8. componentWillUnmount();

   Here is where we clean up logic should go, clearing counters and caches.

   componentWillUnmount(){
   window.removeEventListener("restart");
   }

---

!---> Error Boundires are,

9. getDerivedStateFromError();

   If a child component of a parent component has an error we can use this method to display an error screen.

   static getDerivedStateFromError(error) {
   return { hasError: true };
   }

---

10. componentDidCatch();

It enhances the capability of the first error boundary above by allowing for logging errors.

componentDidCatch(error, info) {
console.log(info.componentStack);
}

---
