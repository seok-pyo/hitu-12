import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fontData, FontItem } from '../data/fontData'
import '../styles/detail.css'

export default function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { id } = useParams<{ id: string }>()
  const data: FontItem | undefined = id ? fontData[id] : undefined

  if (!data) return <p style={{ color: '#fff', padding: '2rem' }}>존재하지 않는 작가입니다.</p>

  return (
    id === 'about'
      ?
      <div className="detail">
        <h1>{data.title}</h1>
        <p className="exhi-des">획에는 시작과 끝이 있고, 이를 머리와 맺음이라고 부른다. 머리는 붓(도구)을
          종이에 댄 곳이고 맺음은 붓을 종이에서 뗀 곳이다. 머리 모양을 보면 획의 진행 방향을 예측할 수 있고 맺음 모양도 가늠할 수 있다.

          2025년 봄, 한 획의 머리와 맺음과 같이, 2024년에 활자디자인 공부를 시작한 아홉 명이 1년의 학습 결과를 한다. 각자의 필요와 생각과 취향에 따라 활자를 기획했고,
          목표를 향해 각자에게 알맞은 방향을 찾아 디자인했다. 모두 다 낯선 경험 앞에서, 무력감을 느끼는 순간도 있었고, 자기 생각이 눈에 보이는 순간의 흥분도 있었다.
          아홉 명과 이들을 지도한 이용제가 준비한 ‘머리와 맺음’ 전시에서 각자의 시작과 진행 과정, 그리고 현재(결과)를 소개한다.
          <br />
          <br />
          2011년 한글타이포그라피학교가 합정동에 문을 열고, 한글 활자디자인과 타이포그래피 교육을 시작한 지 14년이 됐다. 2013년 봄에 처음 활자디자인 학습 결과를 전시했고,
          지금까지 총 11번 전시회를 열었다. 전시에서 소개했던 작품 중에 30여 개의 폰트가 유통되고 있다. 그리고, 현재 그들 중에서 10여 명이 활자디자이너로 활동하고 있다.
          한글타이포그라피학교가 꿈꾸는 이상을 향해, 필요한 작은 매듭을 짓고 있다. 잠시 한글타이포그라피학교의 교육이 주춤했던 때도 있었지만 다시 시작했다. ‘머리와 맺음’ 전시를 마련한 아홉 명이 다시 ‘시작’을 알린다.

          학습 과정은 같아도, 늘 사람이 바뀌니, 어느 한 해도 같지 않다. 예상한 결과도 있고, 예상하지 못한 결과도 있다. 특히, ‘머리와 맺음’ 전시자는 각자 생계를 위한 본업이 있어, 현업에서 활동하는
          디자이너답게 능숙한 모습을 보여주었다. 반대로 쫓기는 일상에 없는 시간을 만들어 내어 작업해야 했던, 현실의 한계도 보였다.
          <br />
          <br />
          ‘머리와 맺음’ 전시는 ‘시작을 위해 맺는’ 의식이다. 너무나 흔한 말로, 시작이 있으면 끝이 있고, 또 끝이 나야 시작이 있다. 어떤 의미에서는 맺음이고, 어떤 의미에서는 끝이고,
          어떤 의미에서는 시작이다. 이제 중요한 선택을 해야 한다. 이번 전시가 학습의 맺음이 끝이 될 것인가? 이 맺음이 다음 단계의 시작이 될 것인가? 각자 ‘나는 시작에 서 있는가, 끝에 서 있는가?’</p>

        <div>
          <img id="gallery" key={`${data.title} 1`} src={data.image['0']['src']} alt={`${data.title} 1`} />
        </div>
        <Link to="/" className="back2">돌아가기</Link>
      </div>
      :
      <div className="detail">
        <h1 className='detail-tit'>{data.title}</h1>
        <p className='detail-role'>{data.role} / {data.type}</p>
        <p className='detail-des'>{data.description}</p>
        {
          data.image.map((img, index) =>
          (
            <div key={index}>
              < img src={img.src} alt={`${data.title} ${index + 1}`} />
              {img.caption && <p className='refer'>{img.caption}</p>}
            </div>
          )
          )
        }
        <div className="detail-auth-part">
          <p className='detail-auth'>{data.author}</p>
          {
            data.authorDes &&
            <p className='detail-aut-des'>{data.authorDes}</p>
          }
        </div>

        <Link to="/" className="back">돌아가기</Link>
      </div>
  )
}