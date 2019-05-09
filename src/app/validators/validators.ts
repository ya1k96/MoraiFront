import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

export class Email {
    constructor( private http: HttpClient ) {}

    static existEmail( control: FormControl) {
        const email = control.value.email;

    }
    private _exist( email: string ) {
        this.http.get(`localhost:3000/api/emailExist?email=${email}`);
    }
}
