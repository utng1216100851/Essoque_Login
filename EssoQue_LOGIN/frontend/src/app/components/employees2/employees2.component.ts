import { Component, OnInit } from '@angular/core';
import { Employee2Service } from '../../services/employee2.service';
import { NgForm  } from '@angular/forms';

import { Employee2 } from '../../models/employee2';

declare var M: any;

@Component({
  selector: 'app-employees2',
  templateUrl: './employees2.component.html',
  styleUrls: ['/employees2.component.css'],
  providers: [ Employee2Service ]
})
export class Employees2Component implements OnInit {
  selected:string="";
  selected2:string="";

  checkCabu:string="";
  checkCampi:string="";
  checkExplo:string="";

  constructor(private employeeService: Employee2Service) { }

  ngOnInit() {
    this.getEmployees();
    this.ocultarDivsInicio();
    
  }
  ocultarDivsInicio(){
    document.getElementById('divAreasEvaluar').style.display='none';
    document.getElementById('divMenuCampismo').style.display='none';
    document.getElementById('divMenuCabuyeria').style.display='none';
    document.getElementById('divMenuExploracion').style.display='none';
    document.getElementById('divRadios').style.display='none';
    document.getElementById('divSubirEvidencia').style.display = "none";
    document.getElementById('divDestresas1').style.display='none';
    document.getElementById('divDestresas2').style.display='none';
          document.getElementById('divDestresas3').style.display='none';
          document.getElementById('divDestresas').style.display='none';
  }

  addEmployee(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: 'Updated Successfully'});
        });
    } else {
      this.employeeService.postEmployee(form.value)
      .subscribe(res => {
        this.getEmployees();
        this.resetForm(form);
        M.toast({html: 'Save successfully'});
      });
    }
    
  }

  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee2[];
      });
  }

  editEmployee(employee: Employee2) {
    
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ocultarDivsInicio();
      this.employeeService.selectedEmployee = new Employee2();
    }
  }
  
  ocultarSEvidencia(){
    document.getElementById('divSubirEvidencia').style.display='block';
    document.getElementById('divDestresas1').style.display='none';
    document.getElementById('divDestresas2').style.display='none';
          document.getElementById('divDestresas3').style.display='none';
    document.getElementById('divAreasEvaluar').style.display='none';
    document.getElementById('divMenuCampismo').style.display='none';
    document.getElementById('divMenuCabuyeria').style.display='none';
    document.getElementById('divMenuExploracion').style.display='none';
    
  }

  ocultarLlEvidencia(){
    document.getElementById('divSubirEvidencia').style.display='none';
    
    document.getElementById('divAreasEvaluar').style.display='block';
  }


checkCabuyeria(event) {
    if ( event.target.checked ) {        
        if(this.selected=="Amarilla" && this.selected2=="Manada"){
          document.getElementById('divMenuCabuyeria').style.display='block';
        }

        if(this.selected=="Verde" && this.selected2=="Manada"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }   
        if(this.selected=="Azul" && this.selected2=="Manada"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }       
        if(this.selected=="Roja" && this.selected2=="Manada"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas3').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }
        if(this.selected=="Amarilla" && this.selected2=="Tropa"){
          document.getElementById('divMenuCabuyeria').style.display='block';
        }

        if(this.selected=="Verde" && this.selected2=="Tropa"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }   
        if(this.selected=="Azul" && this.selected2=="Tropa"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }       
        if(this.selected=="Roja" && this.selected2=="Tropa"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas3').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }  
        if(this.selected=="Amarilla" && this.selected2=="Comunidad"){
          document.getElementById('divMenuCabuyeria').style.display='block';
        }

        if(this.selected=="Verde" && this.selected2=="Comunidad"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }   
        if(this.selected=="Azul" && this.selected2=="Comunidad"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }       
        if(this.selected=="Roja" && this.selected2=="Comunidad"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas3').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }    
        if(this.selected=="Amarilla" && this.selected2=="Clan"){
          document.getElementById('divMenuCabuyeria').style.display='block';
        }

        if(this.selected=="Verde" && this.selected2=="Clan"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }   
        if(this.selected=="Azul" && this.selected2=="Clan"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }       
        if(this.selected=="Roja" && this.selected2=="Clan"){
          document.getElementById('divMenuCabuyeria').style.display='block';
          document.getElementById('divDestresas1').style.display='block';
          document.getElementById('divDestresas2').style.display='block';
          document.getElementById('divDestresas3').style.display='block';
          document.getElementById('divDestresas').style.display='block';
        }
   }
   if(event.target.checked == false){
    document.getElementById('divDestresas').style.display='none';
    document.getElementById('divDestresas1').style.display='none';
    document.getElementById('divMenuCabuyeria').style.display='none';
    document.getElementById('divDestresas2').style.display='none';
    document.getElementById('divDestresas3').style.display='none';
   }
}
checkCampismo(event) {
  if ( event.target.checked ) {
    if(this.selected=="Amarilla" && this.selected2=="Manada"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }

    if(this.selected=="Verde" && this.selected2=="Manada"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }   
    if(this.selected=="Azul" && this.selected2=="Manada"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }       
    if(this.selected=="Roja" && this.selected2=="Manada"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas3').style.display='block';
    }  

    if(this.selected=="Amarilla" && this.selected2=="Tropa"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }

    if(this.selected=="Verde" && this.selected2=="Tropa"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }   
    if(this.selected=="Azul" && this.selected2=="Tropa"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }       
    if(this.selected=="Roja" && this.selected2=="Tropa"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas3').style.display='block';
    }
    if(this.selected=="Amarilla" && this.selected2=="Comunidad"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }

    if(this.selected=="Verde" && this.selected2=="Comunidad"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }   
    if(this.selected=="Azul" && this.selected2=="Comunidad"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }       
    if(this.selected=="Roja" && this.selected2=="Comunidad"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas3').style.display='block';
    }
    if(this.selected=="Amarilla" && this.selected2=="Clan"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }

    if(this.selected=="Verde" && this.selected2=="Clan"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }   
    if(this.selected=="Azul" && this.selected2=="Clan"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas').style.display='block';
    }       
    if(this.selected=="Roja" && this.selected2=="Clan"){
      document.getElementById('divMenuCampismo').style.display='block';
      document.getElementById('divDestresas').style.display='block';
      document.getElementById('divDestresas1').style.display='block';
      document.getElementById('divDestresas2').style.display='block';
      document.getElementById('divDestresas3').style.display='block';
    }
    if(event.target.checked == false){
      document.getElementById('divDestresas1').style.display='none';
      document.getElementById('divMenuCampismo').style.display='none';
      document.getElementById('divDestresas2').style.display='none';
      document.getElementById('divDestresas3').style.display='none';
     }
      
 }
 if(event.target.checked == false){
  document.getElementById('divMenuCampismo').style.display='none';
  document.getElementById('divDestresas').style.display='none';
 }
}
checkExploracion(event) {
  if ( event.target.checked ) { 
 if(this.selected=="Amarilla" && this.selected2=="Manada"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}

if(this.selected=="Verde" && this.selected2=="Manada"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}   
if(this.selected=="Azul" && this.selected2=="Manada"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}       
if(this.selected=="Roja" && this.selected2=="Manada"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas3').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}  
if(this.selected=="Amarilla" && this.selected2=="Tropa"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}

if(this.selected=="Verde" && this.selected2=="Tropa"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}   
if(this.selected=="Azul" && this.selected2=="Tropa"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}       
if(this.selected=="Roja" && this.selected2=="Tropa"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas3').style.display='block';
  document.getElementById('divDestresas').style.display='block';
} 
if(this.selected=="Amarilla" && this.selected2=="Comunidad"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}

if(this.selected=="Verde" && this.selected2=="Comunidad"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}   
if(this.selected=="Azul" && this.selected2=="Comunidad"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}       
if(this.selected=="Roja" && this.selected2=="Comunidad"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas3').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}
if(this.selected=="Amarilla" && this.selected2=="Clan"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}

if(this.selected=="Verde" && this.selected2=="Clan"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}   
if(this.selected=="Azul" && this.selected2=="Clan"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}       
if(this.selected=="Roja" && this.selected2=="Clan"){
  document.getElementById('divMenuExploracion').style.display='block';
  document.getElementById('divDestresas1').style.display='block';
  document.getElementById('divDestresas2').style.display='block';
  document.getElementById('divDestresas3').style.display='block';
  document.getElementById('divDestresas').style.display='block';
}
  }
if(event.target.checked == false){
  document.getElementById('divDestresas1').style.display='none';
  document.getElementById('divMenuExploracion').style.display='none';
  document.getElementById('divDestresas2').style.display='none';
  document.getElementById('divDestresas3').style.display='none';
  document.getElementById('divDestresas').style.display='none';
 }

}

capturar(event:any){
        this.selected = event.target.value;
        this.mostrarRadios();     
       
      }

capturarSeccion(event:any){
  this.selected2 = event.target.value;
  this.mostrarRadios();
  
}

mostrarRadios(){
  if(this.selected != "" && this.selected2 != ""){
      document.getElementById('divRadios').style.display = "block";
  }else{
      document.getElementById('divRadios').style.display = "none";
  }
}

}