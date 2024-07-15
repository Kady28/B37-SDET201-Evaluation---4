package ApiTesting;

import static io.restassured.RestAssured.given;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

public class Crypto {

	@Test
	public void Register() {
		    JSONObject json=new JSONObject();
	   	    json.put("username", "user123");
	   	    json.put("password", "securepassword");
	   	    json.put("email", "user@example.com");
		
		given().post("https://crypto-wallet-server.mock.beeceptor.com/api/v1/register").then().statusCode(200).log().all();
	}
	@Test
	public void Login() {
		    JSONObject json=new JSONObject();
	   	    json.put("username", "user123");
	   	    json.put("password", "securepassword");
		
		given().post("https://crypto-wallet-server.mock.beeceptor.com/api/v1/login").then().statusCode(200).log().all();
	}
	@Test
	public void Balance() {
		
		given().get("https://crypto-wallet-server.mock.beeceptor.com/api/v1/balance").then().statusCode(200).log().all();
	}
	@Test
	public void Transaction() {
		
		given().get("https://crypto-wallet-server.mock.beeceptor.com/api/v1/transactions").then().statusCode(200).log().all();
	}
	@Test
	public void Transfer() {
		    JSONObject json=new JSONObject();
	   	    json.put("recipient_address", "0x1234567890ABCDEF");
	   	    json.put("amount", 5.0);
	   	    json.put("currency", "ETH");
		
		given().post("https://crypto-wallet-server.mock.beeceptor.com/api/v1/transactions").then().statusCode(200).log().all();
	}
	@Test
	public void Transaction_Fees() {
		    JSONObject json=new JSONObject();
	   	    json.put("amount", 2.5);
	   	    json.put("currency", "BTC");
	   	    json.put("recipient_address", "0x1234567890ABCDEF");
		
		given().post("https://crypto-wallet-server.mock.beeceptor.com/api/v1/transaction_fee").then().statusCode(200).log().all();
	}
	@Test
	public void Exchange_rate() {
		
		given().get("https://crypto-wallet-server.mock.beeceptor.com/api/v1/exchange_rates").then().statusCode(200).log().all();
	}
}
