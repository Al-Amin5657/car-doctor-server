/* 
*JWT: secure your api
------------------------
create token
----------------
1. client: after user login send user basic info to create token.
2. in the server side : install npm i jsonwebtoken
3. import jsonwebtoken
4. jwt.sign(payload, secret, {expire})
5. return token to the client side.

6. after receiving the token store it either http only cookies or local storage ( second best solution)
7. use a general space on AuthStateChange > AuthProvider
------------------------------
      SEND TOKEN TO SERVER
----------------------------------
1. FOR SENSITIVE api call ( ) send authorization headers
{authorization: 'Bearer token'}

-----------------------------
       VERIFY TOKEN
-------------------------------

1. create a function called verifyJWT
2. this function will have three params: req, res, next
3. first check whether the authorization headers exists
4. if not send 401
5. get the token out of the authorization headers
6. call jwt.verify(token, secret, (err, decoded))
7. if err => send 401
8. set decoded to the req object so that we can retrieve it later.
9. call the next() to go to the next function.
--------------------------
1. check whether token has the email that matches with the request email.
*/