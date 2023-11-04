// -
/*
make api secure
concept
1.assign to token for each person (access token and refresh token)
2.access token contain user identification (email,role etc) valid for shorter time
3.refresh token in used to recreate an access token that was expired
4. if refresh token is invalid logout the user
// 
1.jwt-json web token
2.jwt.sing -generated token by using this
3.create api set to cookie-http only,secure,same site
4.from client side:axios withCredentials true
5.cors setup origin and credentials:true
// 
1.for secure api calls
2.server side :install cookie parser and use it as a middleware
3.req.cookies
4.on the client side: make api call using axios with credentials true or credentials include while using fetch
5.
*/
// 