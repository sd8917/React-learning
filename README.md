## Context API
- Share global data (like `theme`, `user`, `language`, `auth` etc)
- Manage app-wide state when using simple apps

## Core parts
1. `React.createContext()` -> Creates a context object
2. `Context.Provider` -> Provides data to child components
3. `useContext()`-> Consumes the data inside any component


## Note
- When you have too many context provides, your app tree can get deeply nested and messy, like this::

```
<AuthProvider>
  <ThemeProvider>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </ThemeProvider>
</AuthProvider>


```

## Solution
- You can combine multiple providers into one component, so your <App /> Only needs a single wrapper.

```
// ProviderComposer.js
export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};


```

## Javascript

- JavaScript Higher Order Functions
    - Take another function as an argument
    - Returns another function as its result
```
function fun(){
  console.log("Hello world!");
}

function fun2(action){
  action();
  action();
}
```
##

### Best practices for error handling

- Catch specific Errors: Handle specific error types if possible


- Use finally for cleanup: Ensure resources are released or closed

- Avoide silent failure : Always log or handle errors appropriately

- Use custom Errors : Provide meaningful error message.

## How to add custom error in js??

- Error represents the state of being wrong in condition. 
Javascript handles a predefined set of error by iteself but if you want to create your own error handling mechanish yu can do that with custom error.

`
new Error(msg, filename, linon)
`

- Custom error can be constructed in two ways.
1. Class constructore extending error class
2. Function constructor inherting error class.

class CustomErrorName extends Error{
  constructor(){
    super()
  }

  ...
}

## prototype
- Every object in js has a built in property , which is called its prototype.
Tgis prototype itseld an object so the prototype will have its own prototype, , making whats called a prototype chaie. 
The chain end when we reach a prototype that has null of its own prototyp.e
