
![image](./public/images/landing_page.png)

# Fidoauth

An Oauth 2.0 identity provider with FIDO2 authentication.


There are two parts to this project: the fidoauth service and the mock app.

# Fidoauth Service
The fidoauth service is the identity provider. It has a backend developed with Flask and a frontend developed with Next.js.

## Backend Setup
1. Go to the `fidoauth` directory.
``` bash
cd fidoauth
```

1. Create a conda environment (you can name it whatever you want, "oauth2" is just an example):
    ``` bash 
    conda create -n "oauth2"
    conda activate oauth2
    ```
1. Then install the dependencies:
    ``` bash 
    pip install -r requirements.txt
    ```
1. Make sure no other app is running on port 5000. 
1. Activate conda environment set up in the previous step:
    ``` bash 
    conda activate oauth2
    ```
1. Start the server:
    ``` bash 
    flask run
    ```
The fidoauth service backend should be running on http://localhost:5000

## Frontend Setup
1. Go to the `fidoauth/client` directory.
``` bash
cd fidoauth/client
```

1. Install the dependencies:
``` bash
yarn
```

1. Start the frontend:
``` bash
yarn dev
```

The fidoauth service frontend should be running on http://localhost:3000

# Sign Up for Fidoauth

1. Go to http://localhost:3000 and click "Create Account"
![image](./public/images/landing_page.png)
2. Fill in the form and click "Create Account"<br/>
<img src="./public/images/sign_up.png" width="50%">
3. The browser will prompt you to scan your FIDO2 device (it could be Apple's FaceID or TouchID,  or any other FIDO2 device)<br/>
<img src="./public/images/fido_prompt.png" width="50%">
4. After successful authentication, you will be redirected to the profile page<br/>
<img src="./public/images/profile.png" width="50%">

# Login to Fidoauth

1. Go to http://localhost:3000 and click "Login"
1. Fill in the `Personal ID` and click "Login"
1. The browser will prompt you to scan your FIDO2 device (it should be the same device you used to sign up)
1. After successful authentication, you will be redirected to the profile page

