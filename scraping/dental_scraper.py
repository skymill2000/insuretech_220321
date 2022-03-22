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
    if gender == 0:
        # 남자를 클릭하라
    else:
        # 여자 버튼을 클릭하라


getAIAData("이름", "000101", 0)
