

# 밈친(MEMECHIN) 
밈에 중독된 당신을 위한 밈 추천 앱

## API 명세서

[api 링크](https://github.com/ON-SOPT-SERVER/ON-SOPT-SERVER-SEMINAR/wiki)

## sequelize Model

```javascript
router.use('/search', require('./search'));
router.use('/detail', require('./detail'));
router.use('/posts', require('./posts'));
```


## ERD

![ERD](https://github.com/ON-SOPT-SERVER/ON-SOPT-SERVER-SEMINAR/blob/master/5th-seminar/public/images/ERD.png)

#

## 기능 소개


🚗 [GET] 오늘의 밈 조회
- `/main/today`

🚗 [GET] 키워드별 추천
- `/main/keyword?=""`

🚗 [GET] 검색
- `/search/hashtag?=""`

🚗 [GET] 상세 뷰
- `/detail/hashtag?=""`


[예시]
 
- 양재욱 - 키워드별 추천, 검색, 상세 뷰

- 김정재 - 오늘의 밈 조회, 키워드별 추천  
