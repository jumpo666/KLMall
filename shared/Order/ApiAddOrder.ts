import { BaseReq, BaseRes } from '../Base/BaseInterface';
import { OrderItem } from './Order';

export interface ReqAddOrder extends BaseReq{
    products: {
        id: string,
        spec:string,
        amount:number
    }[]
}

export interface ResAddOrder extends BaseRes {
    data:OrderItem
}