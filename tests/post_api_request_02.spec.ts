import {test,expect} from '@playwright/test';
//import {*} from './post_request_body.json'
const bookingAPIRequestBody=require('./post_request_body.json');



test('POST API Request using Static JSON file',async({request})=>{


await request.post(`/booking`,{
    data:bookingAPIRequestBody
})


});