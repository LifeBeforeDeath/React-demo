import { register } from "./register";
test('register service return success on registering ',(done)=>{
    register({
        name: "PraveenKumar",
        email: "Praveenkumar4@sapient.com",
        password: "Praveenkumar@4sapient"
    })
    .then((response)=>{
        //?
        done();
    })
})