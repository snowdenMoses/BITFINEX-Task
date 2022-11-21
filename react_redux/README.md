The Process of fetching data from a remote endpoint api in react/redux involves using a thunk(from redux thunk)
as a middleware. The function of the thunk is to seamlessly get (manipulating) asynchronous data.

The processes of setting up a redux involves 
    1.  Setting up action creators and action types that helps in dispatching action and in reducers respectively
    2.  Setting up a reducer, that helps in manipulating the state of the data
    3. Setting up a store that takes in the reducer and the thunk middleware.
    4. encapsulating the Application component inside a provider (that has a property of store)
    5. Use react-redux Higher Order Component to mapStateToProps, and mapDispatchToProps