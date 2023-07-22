import { useState } from 'react';
import Main from './pages/Main';
import Cover from './components/Cover';
import './App.css';

function App() {
    const [hideCover, setHideCover] = useState(false)
    
    return (
        <>
            { hideCover ? <Main /> : <Cover hide= { hideCover } setHide= { setHideCover }/> }
        </>
    )
}

export default App;
