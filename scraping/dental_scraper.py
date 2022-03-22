from operator import ge
from selenium import webdriver
import re

driver = webdriver.Chrome('./chromedriver')


def rePlaceData(value):
    numbers = re.findall("\d+", value)
    result = ""
    for i in numbers:
        decodedNumber = i
        result += decodedNumber
    return result

# 실습2
# AIA 생명 치아보험 견적 페이지에서 보장 내역과 보험료을 가져와서 출력을한다


def getAIAData(name, birth, gender):
    driver.get(
        'https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html#')
    driver.implicitly_wait(3)
    if gender == 0:
        maleButton = driver.find_element_by_xpath(
            '//*[@id="calculator-container-form"]/div[1]/div[2]/div/div[1]/div/div[3]/div[1]/div[2]')
        maleButton.click()
        # 남자를 클릭하라
    else:
        femaleButton = driver.find_element_by_xpath(
            '//*[@id="calculator-container-form"]/div[1]/div[2]/div/div[1]/div/div[3]/div[1]/div[1]')
        femaleButton.click()

    birthInput = driver.find_element_by_xpath('//*[@id="aia644363719"]')
    birthInput.send_keys("19"+birth)

    confirmButton = driver.find_element_by_xpath('//*[@id="btn806817556"]')
    confirmButton.click()

    driver.implicitly_wait(3)
    htmlResult = driver.find_element_by_xpath(
        '//*[@id="premium-by-timespan-value"]')
    print(htmlResult.text)

    # 여자 버튼을 클릭하라
    # 여기에 작성


getAIAData("이름", "700101", 0)
