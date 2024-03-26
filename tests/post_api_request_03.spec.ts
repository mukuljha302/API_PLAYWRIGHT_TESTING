//Load the playwright Module
import {test,expect} from "@playwright/test";
import {faker} from '@faker-js/faker';
const { DateTime }=require('luxon');


//write a test
test('POST API Request using Dynamic API request body',async({request})=>{


    const firstName=faker.person.firstName();
    const lastName=faker.person.lastName();
    const totalPrice=faker.number.int(1000);
    
    const checkInDate=DateTime.now().toFormat('yyyy-MM-dd');
    const checkOutDate=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');




//create a post api request
const postAPIResponse=await request.post(`/booking`,{
    data:{
        "firstname": firstName,
        "lastname": lastName,
        "totalprice": totalPrice,
        "depositpaid": true,
        "bookingdates": {
            "checkin": checkInDate,
            "checkout": checkOutDate
        },
        "additionalneeds": "super bowls"
    }
})

const postAPIResponseBody=await postAPIResponse.json();
console.log(postAPIResponseBody);



//validate the status code 
expect(postAPIResponse.ok()).toBeTruthy();

expect(postAPIResponse.status()).toBe(200);




//validate JSON response 
expect(postAPIResponseBody.booking).toHaveProperty("firstname",firstName);

expect(postAPIResponseBody.booking).toHaveProperty("lastname",lastName);



//validate nested JSON Objects
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin",checkInDate);
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout",checkOutDate);


    });




