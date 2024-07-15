import { GoogleLogin } from "react-google-login";

function Login(){
    const onSuccess = (response) => {
        console.log(response);
        fetch('/api')
        .then((res) => res.json())
        .then((data) => console.log(data.message))
    }
  
    const onFailure = (response) => {
        console.log(response);
    }
    return(
        <div id = "signIn">
            <GoogleLogin
                clientId="147418774980-q4reanmtjdpposq68lveb4g5kiccde4o.apps.googleusercontent.com"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                
            />
        </div>
    )
}

export default Login;