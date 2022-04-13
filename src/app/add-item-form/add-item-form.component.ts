import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isNewItem = false;

  constructor() { }

  ngOnInit(): void {
    if(this.item.amount != 0 || this.item.description != ''){
      this.isNewItem = true;
    }else{
      this.isNewItem = false;
    }
  }

  onSubmit(form :NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }

}
