import { HammerDirective } from './hammer.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [HammerDirective],
  exports: [HammerDirective]
})
export class HammerModule {}
