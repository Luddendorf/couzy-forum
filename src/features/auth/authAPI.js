import { urls } from '../../components/helpers/urls';

export function signInUser(signinFormPayload, setIsLoading) {
    // return new Promise((resolve) =>
    //   setTimeout(() => resolve({ data: amount }), 500)
    // );

    fetch(process.env.REACT_APP_API_URI + urls.signInUrl, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: signinFormPayload
    })
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setIsLoading(false);
        });
}