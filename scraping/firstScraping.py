from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://naver.com')