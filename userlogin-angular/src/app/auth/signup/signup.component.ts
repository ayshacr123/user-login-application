import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 

    name : string = '';
    username : string = '';
    password : string = '';
  
    user:User=new User();
  
    constructor(private authService:AuthService,private route:Router) { }
  
    ngOnInit(): void {
      this.username='';
      this.password='';
      this.name='';
    }
    signup(){
      // console.log(this.name+" "+this.username+" "+this.password)
      this.user.username=this.username;
      this.user.password=this.password;
      this.user.name=this.name;
      this.user.role="user";
      this.authService.signUp(this.user).subscribe(res=>{
        if(res==null){
          alert("Registration failed");
          this.ngOnInit();
        }
        else{
          console.log("Registration successfull");
          alert("Registratioin Succesfull");
          this.route.navigate(['/']);
        }
      }, err => {
    alert("Registration failed");
    this.ngOnInit();
      })
    }
  

}
