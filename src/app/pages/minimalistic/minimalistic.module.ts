import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalisticComponent } from './minimalistic.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule }   from '@angular/forms';
import { SpeechRecognitionService } from '../../speech-recognition.service';
const routes: Routes = [{
	path: '',
	data: {
      title: 'minimalistic',
      urls: [{title: 'minimalistic', url: '/'},{title: 'minimalistic'},{title: 'minimalistic'}]
    },
	component: MinimalisticComponent
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot()    
  ],
  providers: [SpeechRecognitionService],
  declarations: [MinimalisticComponent]
})
export class MinimalisticModule { }
