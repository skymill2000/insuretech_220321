from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://www.mk.co.kr/news/culture/view/2022/03/259303/?utm_source=naver&utm_medium=newsstand')
title = driver.find_element_by_xpath('//*[@id="top_header"]/div/div/h1')
titleFromClassName = driver.find_element_by_class_name('top_title')
subtitle = driver.find_element_by_xpath('//*[@id="top_header"]/div/div/h2')
print(title.text)
print(subtitle.text)
print(titleFromClassName.text)
