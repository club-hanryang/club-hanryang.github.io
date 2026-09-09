# club-hanryang.github.io

한량들의 클럽 소개 사이트예요. <https://club-hanryang.github.io/>

빌드 과정이 없어요. HTML을 고쳐서 커밋하면 그대로 배포돼요.

```
index.html            회사 소개 (메인)
privacy.html          개인정보 처리방침
clubs/<슬러그>/index.html
                      클럽별 소개페이지 (morning · attendance · diet · workout)
css/style.css         여섯 페이지가 같이 쓰는 스타일
js/app.js             intoss:// 딥링크가 안 열릴 때 안내
assets/icons/         앱 아이콘 4종 + 클로버 로고
assets/qr/            클럽별 QR (아직 비어 있어요)
assets/shots/         앱 스크린샷 (아직 비어 있어요)
.nojekyll             Jekyll 처리를 끄고 파일을 그대로 서빙
```

## 로컬에서 보기

```bash
python3 -m http.server 4000
```

## 아직 채워야 하는 것

**클럽별 QR** — `assets/qr/<슬러그>.png`. 담을 값은 `intoss://` 가 아니라
미니앱 안에서 `getTossShareLink()` 로 받은 **토스 공유 링크**예요. 그래야 토스가
없는 사람도 스토어로 넘어가요. 파일을 넣은 뒤 각 클럽 페이지의 `.qr-slot` 을
`<img src="../../assets/qr/<슬러그>.png" alt="">` 로 바꾸면 돼요.

**앱 스크린샷** — `assets/shots/`. 1170 × 2532 (iPhone 3x), 상태바는 잘라내고요.
클럽 페이지의 `.frame` 안에 `<img>` 를 넣으면 자리에 맞게 채워져요.
찍을 때 방 사람들의 사진과 이름이 나오니, 본인 계정만 있는 테스트 방에서 찍으세요.

**공유 이미지(OG)** — 지금은 클로버 아이콘을 쓰고 있어요. 카톡·슬랙에 링크를
붙였을 때 제대로 나오려면 1200 × 630 이미지가 따로 있는 게 좋아요.

## 브랜드 색

앱 아이콘 배경에서 그대로 뽑은 값이에요. 아이콘이 기준이에요.

| 클럽 | 색 | 글자 |
| --- | --- | --- |
| 기상클럽 | `#FA5D38` | 검정 |
| 출석클럽 | `#2471F7` | 흰색 |
| 식단클럽 | `#12A292` | 검정 |
| 운동클럽 | `#068A4A` | 흰색 |

값은 `css/style.css` 맨 위 `:root` 에 모여 있어요.
