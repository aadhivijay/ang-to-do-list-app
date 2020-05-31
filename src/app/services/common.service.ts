import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ItemDataType {
  id: number;
  title: string;
  description: string;
}

@Injectable({
    providedIn: 'root'
})
export class CommonService {

  public item = new BehaviorSubject<ItemDataType>(undefined);

  public getList(): any[] {
    const list = JSON.parse(localStorage.getItem('list'));
    return list && list.length ? list : [];
  }

  public setList(list: any[]) {
    localStorage.setItem('list', JSON.stringify(list));
  }

}