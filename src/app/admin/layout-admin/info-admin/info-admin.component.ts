import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NguoiDung } from 'src/app/_core/model/NguoiDung';
import { StatusService } from 'src/app/services/status/status.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { FormAdminComponent } from './form-admin/form-admin.component';



@Component({
  selector: 'app-info-admin',
  templateUrl: './info-admin.component.html',
  styleUrls: ['./info-admin.component.scss']
})
export class InfoAdminComponent implements OnInit {
  admin_info: NguoiDung;
  old_pass: string;
  @ViewChild('formAdmin') formAdmin: FormAdminComponent;
  constructor(private _statusService: StatusService, private _userService: UserService, private _router: Router) {
    this.admin_info = JSON.parse(localStorage.getItem('admin_login'));
    this.old_pass = this.admin_info.MatKhau;
  }

  ngOnInit() {
    this._statusService.OutputStatusAdmin.subscribe(
      (res: any) => {
        console.log(res);
        if (res === 'update') {
          this.admin_info = JSON.parse(localStorage.getItem('admin_login'));
          this._statusService.ChangeStatusEditAdmin('normal');
        }
      },
      error => console.log(error)
    );
  }

  OpenModalEditAdmin() {
    this._statusService.ChangeStatusEditAdmin('edit');
  }

  CapNhatAdmin(admin: NguoiDung) {
    this._userService.CapNhatNguoiDung(admin).subscribe(
      (res) => {
        if (typeof res === 'object') {
          swal('Cập nhật thành công', {
            icon: 'success',
          }).then((value) => {
            localStorage.setItem('admin_login', JSON.stringify(res));
            this._statusService.ChangeStatusEditAdmin('update');
            if (this.old_pass !== this.admin_info.MatKhau) {
              localStorage.removeItem('admin_login');
              this.formAdmin.btnCloseModal.nativeElement.click();
              this._router.navigate(['/admin/login']);
            }
          });
        } else {
          swal(res, {
            icon: 'error',
          });
        }
      },
      error => console.log(error)
    );
  }
}
