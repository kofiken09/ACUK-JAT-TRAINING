package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.By;


public class Loginsteps {

   public static WebDriver driver;


    @Given("^I am on google search page$")
    public void i_am_on_google_search_page() throws Throwable {
        //System.setProperty("webdriver.chrome.driver","C:\\Users\\chloe\\IdeaProjects\\ACUK-JAT-TRAINING\\drivers\\.chromedriver.exe");

      System.setProperty("webdriver.gecko.driver","C:\\Users\\chloe\\IdeaProjects\\ACUK-JAT-TRAINING\\drivers\\geckodriver.exe");

        driver = new FirefoxDriver();
        driver.get("https://www.google.com/");
       // driver = new ChromeDriver();

    }

    @When("^I search for \"([^\"]*)\"$")
    public void i_search_for(String arg1) throws Throwable {
        WebElement element = driver.findElement(By.name("q"));
        element.sendKeys(arg1);
        element.submit();
    }

    @Then("^the page title should contain \"([^\"]*)\"$")
    public void the_page_title_should_contain(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the first line on the result page should contain \"([^\"]*)\"$")
    public void the_first_line_on_the_result_page_should_contain(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}


