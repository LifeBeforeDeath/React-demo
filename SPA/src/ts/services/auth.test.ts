import { login } from "./auth";
test('login service will forward the token recieved from backend',(done)=>{
    login({
        email: "Praveenkumar4@example.com",
        password: "Praveenkumar@4"
    })
    .then((response)=>{
        expect(response).toEqual({
            message: "Signed in sucessfully",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlByYXZlZW5rdW1hcjRAZXhhbXBsZS5jb20iLCJ1c2VySWQiOiI2MmYwZDI3N2FkNzE1MDAwMTVjOGJlNTIiLCJpYXQiOjE2NjMwODg1MDMsImV4cCI6MTY2MzE3NDkwM30.ZNqF9drwt7lbuocdX2XlEP7Xr2_7ueWUq1IhNoX0okI",
            email: "Praveenkumar4@example.com",
            name: "Praveen Kumar"
        });
        done();
    })
})