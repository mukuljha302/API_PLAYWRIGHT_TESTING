//Load the playwright Module
import {test,expect} from "@playwright/test";

//write a test
test('POST API Request using static API request body',async({request})=>{


//create a post api request
const postAPIResponse=await request.post(`/booking`,{
    data:{
        "firstname": "Mukul",
        "lastname": "Jha",
        "totalprice": 1000,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
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
expect(postAPIResponseBody.booking).toHaveProperty("firstname","Mukul");

expect(postAPIResponseBody.booking).toHaveProperty("lastname","Jha");



//validate nested JSON Objects
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2019-01-01");


    });




