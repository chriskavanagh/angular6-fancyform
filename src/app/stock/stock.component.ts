import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnChanges, OnInit  {
  
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  updatedstockvalue: number;
  color: string = '';

  ngOnInit() {
    console.log(this.stock);
    console.log(this.productId);    
  }

      stockValueChanged() {
        this.stockValueChange.emit({ id: this.productId, updatdstockvalue: this.updatedstockvalue});
        console.log(`ID: ${this.productId}, Stock: ${this.updatedstockvalue}`);
        this.updatedstockvalue = null;
    }

    ngOnChanges() {
        if (this.stock > 10) {
            this.color = 'green';
        } else {
            this.color = 'red';
        }
    }
}
