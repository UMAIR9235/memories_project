function GoogleSignIn() {
    const handleCredentialResponse = async (response) => {
      const credential = response.credential;
      const accessToken = credential?.accessToken;
  
      // Save the access token to your state or perform any other required action
      console.log(accessToken);
    };
  
    const handleSignInClick = () => {
      window.google.accounts.id.prompt();
      console.log("Google Sign In");
    };
  
    return (
      <div>
        <div id="g_id_onload"
             data-client_id="89234217356-oikjeppbh16q7ji1mf2632l4gqcg06vi.apps.googleusercontent.com"
             data-callback={handleCredentialResponse}>
        </div>
        <button onClick={handleSignInClick}>Sign in with Google</button>
      </div>
    );
  }

  export default GoogleSignIn;
  