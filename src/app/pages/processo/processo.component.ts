import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '@app/@shared/model';
import { AuthService } from '@app/@shared/services/auth/auth.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent implements OnInit {
  
  @ViewChild('CadastroForm') CadastroForm: ElementRef;
  public pageFormCadastro: FormGroup = this.formBuilder.group({
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    artista: new FormControl('', [Validators.nullValidator]),
    cliente: new FormControl('', [Validators.nullValidator]),
    //artistaCliente: new FormControl('', [Validators.nullValidator]),
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}
  public product: any;
  
  ngOnInit(): void {
    this.product = environment.product as any;
  }

}
