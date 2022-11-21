import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from "./centralized_storage/action"
import './App.css';

function iterateUsers(users){
  return users.map(person=> <div className='user'>{person.name}<span className='email'><i>{person.email}</i></span></div>)
}

function App({users, getUsers}) {
  
  useEffect(()=>{
    getUsers()
  },[])

  return (
   <div className='App'>
    <div className='users'>{iterateUsers(users)}</div>
   </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    users: state.users
  }
}
const mapDispatchToProps = {
    getUsers: fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
