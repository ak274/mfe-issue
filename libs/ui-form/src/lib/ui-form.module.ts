import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestFormComponent } from './test-form/test-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestFormComponent],
  exports: [TestFormComponent],
})
export class UiFormModule {}
