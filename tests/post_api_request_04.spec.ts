import {test,expect} from '@playwright/test';
//import {*} from './post_request_body.json'
const bookingAPIRequestBody=require('./post_dynamic_request_body.json');

import { stringFormat } from '../utils/common';
  
test('POST API Request using Dynamic JSON file',async({request})=>{

const dynamicRequestBody:string =  stringFormat(JSON.stringify(bookingAPIRequestBody),"Mukul","Jha","Apple");
//
await request.post(`/booking`,{
    data:JSON.parse(dynamicRequestBody)
})


});