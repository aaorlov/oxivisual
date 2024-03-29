import {Component, HostListener, Input} from '@angular/core';
import * as USER from  "../../../../interfaces/user.interface";
import {ShareService} from "../../../../services/share.service";
import {Resol} from "../../../../interfaces/resol.interface";
import {UserService} from "../../../../services/user.service";
import * as ENTITY from "../../../../entities/entities";

declare var alertify:any;

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.sass']
})
export class NewUserComponent {

  private User: USER.IUser;
  private config: any;
  private submitted: boolean=false;

  @Input()message;

  private tempNewUser = new USER.User();

  private resol: Resol = {
    firstName: true,
    secondName: true,
    email: true,
    password: true,
    passwordRepeat: true,
    role:true
  };

  constructor(
      private shareService: ShareService,
      private userService: UserService
  ){
    this.User = this.userService.getUser();
    this.config = ENTITY.Config;
  }

  ngOnInit(){
    this.message.email = '';
  }

//photo change
  loadPhoto($event){
    let fr = new FileReader();
    try{
      fr[ 'readAsDataURL' ]( $event.target.files[0] );
      fr.onload = ()=>{
        this.tempNewUser.avatar = fr.result;
      };
    } catch( err ){
      console.log('load photo err: ',err);
    }
  }
  
  removePhoto(){
    this.tempNewUser.avatar = '';
  }

  //user save accept/cancel
  //@HostListener('window:keydown', ['$event'])
  keyDown(event: KeyboardEvent, invalid){
    if(event.keyCode == 13){
      this.accept(invalid);
    } else if (event.keyCode == 27){
      this.cancel();
    }
  }

  accept(invalid=false){
    this.submitted = true;
    if(invalid || this.tempNewUser.passwordRepeat != this.tempNewUser.password) return alertify.error('please fill all inputs correctlly');
    this.tempNewUser.newUser = true;
    this.shareService.changeShareSubject(this.tempNewUser);
  }

  cancel(){

    this.shareService.changeShareSubject(this.tempNewUser);
  }
  
}
