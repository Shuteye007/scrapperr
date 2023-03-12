from selenium.webdriver.support import expected_conditions as EC
import time
from pymongo import MongoClient
from selenium import webdriver
import requests
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

try:
    conn = MongoClient()
    print("Connected successfully!!!")
except:  
    print("Could not connect to MongoDB")

db = conn.scrapper
collection = db.products


driver = webdriver.Chrome(ChromeDriverManager().install())
#driver.implicity_wait(10)
driver.maximize_window()
driver.get("https://www.amazon.in/gp/cart/view.html?ref_=nav_cart")
driver.find_element(By.XPATH,"//span[contains(@class,'a-button-inner')]").click()
driver.find_element(By.XPATH,"//input[contains(@id,'ap_email')]").send_keys("8905891709")
driver.find_element(By.XPATH,"//input[contains(@id,'continue')]").click()
driver.find_element(By.XPATH,"//input[contains(@id,'ap_password')]").send_keys("Unknown@123")
driver.find_element(By.XPATH,"//input[contains(@id,'signInSubmit')]").click()
time.sleep(10)
prices = driver.find_elements(By.XPATH,"//span[contains(@class,'a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold')]")
titles = driver.find_elements(By.XPATH,"//span[contains(@class,'a-truncate-cut')]")

myprice=[]
myphone=[]

for title in titles:
    print(title.text)
    myphone.append(title.text)

for price in prices:
    print(price.text)
    myprice.append(float(price.text))

finallist=zip(myphone,myprice)
for data in list(finallist):
    rec={
        "title": data[0],
        "price": data[1]
    }
    rec1 = collection.insert_one(rec)

    print(data)
    # print(data[0])






























