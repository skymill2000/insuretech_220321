from selenium import webdriver
from selenium.webdriver.support.ui import Select
# SELECT 엘리먼트를 위한 라이브러리 로드
driver = webdriver.Chrome('./chromedriver')
driver.get("http://www.eum.go.kr/web/am/amMain.jsp")

sidoSelect = Select(driver.find_element_by_xpath('//*[@id="selSido"]'))
sidoSelect.select_by_visible_text('경기도')

# work1 : 전라남도 고흥군 고흥읍 남계리 본번 45 부번 1 지역에 공시지가를 출력하세요

driver.implicitly_wait(1)
# 상기코드는 드라이버가 1초동안 대기
