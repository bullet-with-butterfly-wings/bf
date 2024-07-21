import { useState, useEffect } from 'react'

function Intro(){
    const [data, setData] = useState(null);
    
    useEffect(() => {
    fetch('/api/auth-url')
    .then((res) => res.text())
    .then((url) => setData(url));  
    }, []);

    return (
    <div className="fixed h-full w-full">
    <div className="flex h-full w-full flex-col justify-center align-middle">
        <h1 className='text-center'>Google Login</h1>
        <a href={data} className="btn btn-primary text-center">Sign up</a>
    </div>
    </div>
    );
}

export default Intro;