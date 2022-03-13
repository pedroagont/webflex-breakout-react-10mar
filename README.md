# React Breakout ⚛️
- **What is React?**
- **Scripts: start vs build**
- **Cleaning boilerplate**
- **Components: children and props**
- **React Hooks: useState, useEffect**
- **Custom hooks**

#### Video link: [https://drive.google.com/file/d/1T_gjH9uLnmBWm_Izt2xOcns5cSZ0vHWT/view](https://drive.google.com/file/d/1T_gjH9uLnmBWm_Izt2xOcns5cSZ0vHWT/view)

## What is React? 😮
### Javascript library to build user interfaces
- Component-based
- State management
- DOM manipulation separated from data/logic

**Multipage approach:**
- ```index.html```
- ```dashboard.html```
- ```profile.html```

**Single Page Application (SPA) approach**
- Everything within the same ```root``` element
- Components have a lifecycle, meaning, they can be mounted, updated and unmounted inside the ```root``` tag

## Scripts: start vs build
- **yarn start/npm start:** runs project on development mode, all files are loaded just as written
- **yarn build/npm run build:** creates an optimized version for production, meaning all src files are compressed and minified to make them load faster (public files are kept the same)

*The process of optimizing its done by an integrated tool in React called Webpack that integrates compilers to properly compress HTML + CSS + JS files*

## Cleaning boilerplate
We can clean some of the unused files and pieces of code in React starting boilerplate to organize and understand our code better
- ```public```
  - ```index.html```
- ```src```
  - ```App.js```
  - ```index.js```

## Components props and children
**Components are independent pieces of code that can be reused across the whole application. They simplest way to declare them is by creating JS functions that return JSX / HTML code to be rendered within the DOM, they can also be defined as a ES6 class/constructor**

### Props
All the properties that renders a component, some are passed by default and custom ones can be passed as html attributes

```javascript
<Component prop1="This is prop1" prop2={ true } name="Pedro" />
```

The component can access to them internally by using the props object. For example: ```props.name``` would refer to ```"Pedro"```

### Children
All components/tags inside a referenced component

```javascript
<Parent>
  <h1>Children title</h1>
  <ChildrenComponent />
</Parent>
```

The children object can be accessed by calling the props. For example: ```props.children``` would refer to an object that contains all the children components/tags inside of it

## React Hooks: useState, useEffect
**React hooks allows us to interact with logic and state management within a functional component without without writing class components and without affecting the rendering part of it**

### useState()
- Lets us declare a state variable
- When called, it returns an array with two values: the current state and a function that updates it.
- We can pass a parameter to the function to be defined as the initial value

```javascript
[name, setName] = useState('Pedro') // creates a string state variable with 'Pedro' as initial value
[count, setCount] = useState(0) // creates a number state variable with 0 as initial value
[loading, setLoading] = useState(false) // creates a boolean state variable with false as initial value
```

### useEffect()
- Lets us perform logic or "side effects" in functional components
- Mostly used for data fetching and setting up state variables separated from the rendering code
- We can pass a second argument as an array of dependencies: if its empty it means it doesn't depend on any values from props or state, so it never needs to re-run; if its not empty it means it needs to rerun whenever that passed dependency changes

```javascript
useEffect(() => {
  console.log('Calling useEffect just once when mounting!')
}, []); // empty array to call useEffect() just once

useEffect(() => {
  console.log('Calling useEffect once when mounting and each time liked variable changes!')
}, [liked]); // passing liked variable as a dependency of this useEffect()
```

## Custom hooks
A combination of useState and useEffect hooks in a custom function that can be called whenever its needed, either on just one component or on many other
- It returns the state variable(s) and/or function(s) to be used in other component(s)
- Usually placed inside a ```hooks``` folder
- Naming convention follows the word "use" to make the hook more human readable. For example: ```useApplicationData.js``` or ```useAuth.js```
