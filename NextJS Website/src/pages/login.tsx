import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
};


const a = () => {
    return (
        <div className="text-white">
            <LoginButton />
        </div>
    )
}

export default a;