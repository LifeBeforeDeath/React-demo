import Register from './register-page'; 
test('valideUsename will validate username in register form',()=>{
    const rp = new Register();
    document.body.innerHTML = `
        <div class="user-name">
            <label for="username">Username</label>
            <input 
                type="text"
                id="username"
                placeholder="john"
                name="name"
            />
            <span class="message message-error"></span>
        </div>                
    `;
    rp.usernameEl = document.querySelector( '#username' ) as HTMLInputElement;
    const formUser = (rp.usernameEl as HTMLElement).closest( '.user-name' ) as HTMLElement;
    const message = formUser.querySelector( '.message' ) as HTMLElement;
    rp.usernameEl.value = 'Praveen Kumar';

    const validateUsename = rp.validateUsename();

    // assert
    expect( validateUsename ).toEqual( true );
    expect( message.innerHTML ).toEqual( '' );
});
test('validePassword will validate password in register form',()=>{
    const rp = new Register();
    document.body.innerHTML = `
    <div class="form-password">
        <label for="password">Password</label>
        <input 
            type="password" 
            id="password"
            name="password"
            required
        />
        <span class="message message-error"></span>
    </div>                
    `;
    rp.passwordEl = document.querySelector( '#password' ) as HTMLInputElement;
    const formPassword = (rp.passwordEl as HTMLElement).closest( '.form-password' ) as HTMLElement;
        const message = formPassword.querySelector( '.message' ) as HTMLElement;
    rp.passwordEl.value = 'PraveenKumar@4';

    const validatePassword = rp.validatePassword();

    // assert
    expect( validatePassword ).toEqual( true );
    expect( message.innerHTML ).toEqual( '' );
});
test('valideConfirmPassword will validate confirm password in register form',()=>{
    const rp = new Register();
    document.body.innerHTML = `
    <div class="form-confirm-password">
        <label for="confirm-password">Confirm Password</label>
        <input 
            type="password" 
            id="confirm-password"
            name="confirm password"
            required
        />
        <span class="message message-error"></span>
    </div>        
    <label for="password">Password</label>
        <input 
            type="password" 
            id="password"
            name="password"
            required
        />        
    `;
    rp.confirmPasswordEl = document.querySelector( '#confirm-password' ) as HTMLInputElement;
    rp.passwordEl = document.querySelector( '#password' ) as HTMLInputElement;
    const formConfirmPassword = (rp.confirmPasswordEl as HTMLElement).closest( '.form-confirm-password' ) as HTMLElement;
    const message = formConfirmPassword.querySelector( '.message' ) as HTMLElement;
    rp.confirmPasswordEl.value = 'PraveenKumar@4';
    rp.passwordEl.value = 'PraveenKumar@4';

    const validateConfirmPassword = rp.validateConfirmPassword();

    // assert
    expect( validateConfirmPassword ).toEqual( true );
    expect( message.innerHTML ).toEqual( '' );
});
test('isValidate function will return true if everything is valid',()=>{
    const rp = new Register();
    rp.validateUsename = jest.fn(()=> true);
    rp.validatePassword = jest.fn(()=> false);
    rp.validateConfirmPassword = jest.fn(()=> true);

    expect(rp.isValidate()).toBe(false);

})