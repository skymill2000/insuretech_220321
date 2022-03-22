from selenium import webdriver
driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩

driver.get('https://www.melon.com/chart/index.htm')
tablebody = driver.find_element_by_xpath('//*[@id="frm"]/div/table/tbody')
rowInTable = tablebody.find_elements_by_tag_name('tr')
for index, row in enumerate(rowInTable):
    print(index + 1)
    titleAndSinger = row.find_elements_by_tag_name('td')[5]
    print(titleAndSinger.text)
