//Load the playwright Module
import {test,expect} from "@playwright/test";

//write a test
test('Get API Request using playwright',async({request})=>{


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

const bId=postAPIResponseBody.bookingid;
console.log(bId);
var getAPIResponse;
await request.get(`/booking/${bId}`).then((data)=>{
     getAPIResponse=data;
    console.log(getAPIResponse);
});


expect(getAPIResponse.ok()).toBeTruthy();
expect(getAPIResponse).toBeOK();

//validate the status code 
expect(postAPIResponse.ok()).toBeTruthy();

expect(postAPIResponse.status()).toBe(200);




//validate JSON response 
expect(postAPIResponseBody.booking).toHaveProperty("firstname","Mukul");

expect(postAPIResponseBody.booking).toHaveProperty("lastname","Jha");



//validate nested JSON Objects
// expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2018-01-01");
// expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkout","2019-01-01");
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')


console.log((getAPIResponse.json()));

    });




