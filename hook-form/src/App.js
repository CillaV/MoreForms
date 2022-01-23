import './App.css';
import NewUserForm from './components/NewUserForm';
import NewUserFormValid from './components/NewUserFormValid';


const App = () => {
  return (
    <div className="App">
      <NewUserFormValid />
      
      {/* <h2>Your Form Data</h2> */}
      
      {/* <h3>First Name: { firstName } </h3>
      <h3>Last Name: { lastName } </h3>
      <h3>Email Name: { email } </h3>
      <h3>Password Name: { password } </h3>
      <h3>Confirm Password Name: { confirmPassword } </h3> */}

    </div>
  );
}

export default App;
