from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://www.coupang.com/vp/products/5585893678?itemId=10507754432&vendorItemId=76228882840&traid=gold_box&isAddedCart=')

button = driver.find_element_by_xpath(
    '//*[@id="contents"]/div[1]/div/div[3]/div[15]/div[2]/div[2]/button[2]')
button.click()
