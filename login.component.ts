// login.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usernameOrEmail: any;
    username: string = '';
    password: string = '';

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.username = params['username'] || '';
            this.password = params['password'] || '';
        });
    }

    onSubmit() {
        if (this.usernameOrEmail && this.password) {
            // Credentials provided, perform login logic
            console.log('Username or Email:', this.usernameOrEmail);
            console.log('Password:', this.password);

            // Assuming you want to navigate to the home page on successful login
            this.router.navigate (['/home']);
        } else {
            // Credentials not provided, show an error or handle accordingly
            console.error('Please enter both username/email and password.');
        }
    }
}
