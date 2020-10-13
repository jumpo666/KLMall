import { OrderItem } from '../../src/models/OrderUtil';
import { BaseReq, BaseRes } from '../Base/BaseInterface';

export interface ReqPayOrder extends BaseReq {
    orderId: string,
}

export interface ResPayOrder extends BaseRes {
}