import './App.css';
// import Hello from './components/test/hello';
import Navbar from './components/nav'
import User_register from "./components/user_register"


let name

function App() {
    const type_message = (e) => {

    }

    const send_message = () => {

        var message = document.getElementById("message_input").value
        // document.getElementById("message_box").innerHTML += message
        name = message
        document.getElementById("message_input").value = ""
    }

    return (< div className="App" style={{ color: 'green' }}>
        <Navbar />
        <User_register/>
        {/* <h1 > Hello </h1> <Hello name = 'hkd'/> */}
       
    </div>

    );
}

export default App;
export { name }