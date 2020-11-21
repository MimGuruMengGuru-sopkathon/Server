

# 밈친(MEMECHIN) 
밈에 중독된 당신을 위한 밈 추천 앱

## API 명세서

[api 링크](https://github.com/MimGuruMengGuru-sopkathon/Server/wiki)

## sequelize Model

```javascript
router.use('/search', require('./search'));
router.use('/detail', require('./detail'));
router.use('/posts', require('./posts'));
```


## ERD

![ERD](https://github.com/MimGuruMengGuru-sopkathon/Server/blob/main/meme-images/스크린샷%202020-11-22%20오전%204.50.59.png?raw=true)

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
