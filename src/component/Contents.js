import React, { useState } from 'react';
import style from './css/Card.module.css';

const Contents = () => {

  const[data, setData] = useState([
    {
      "title": "나쁜 비판의 잉여 쾌락",
      "content": "인위적으로 상처를 입혀야 누군가를 성장시킬 수 있다고 믿는 것은 낡은 생각일 수 있다. 성장은 자신을 알게 되는 체험인데, 그가 제 작품에 대해 알아야 할 것은 ‘자기도 잘 아는’ 단점이 아니라 ‘자기는 잘 모르는’ 장점이다. 예술가로 성장한다는 것은 단점을 하나씩 없애서 흠 없이 무난한 상태로 변하는 일이 아니라 누구와도 다른 또렷한 장점 하나 위에 자신을 세우는 일이라고 말해볼 수도 있을 것이다."
    },
    {
      "title": "1인분의 지식을 경계하라",
      "content": "내가 아는 것에 갇히는 순간 더 알려고 하지 않는 어리석음을 저지르게 된다. 그 어리석음은 경우에 따라 범죄가 되고 누군가에게 씻을 수 없는 피해를 남긴다."
    },
    {
      "title": "정답은 함정이다",
      "content": "그럴 리가 없다. 세상일이 그렇게 명쾌할 리가 없는 것이다. 우리는 이 사실을 견디질 못해서 스스로 명쾌하다고 주장하는 의견을 나의 것으로 받아들인다."
    },
    {
      "title": "요즘 나는, 행복한 사람들이 좋다",
      "content": "예전에 나는 불행한 사람들을 더 좋아했다. 행복한 사람들은 어쩐지 삶의 깊이를 모르는 것 같았고, 삶의 표면을 피상적으로만 살아가는 것처럼 보였다. 그보다는 다소간의 슬픔을, 우울을 가져 삶 전반에서 행복보다는 불행을 더 예민하게 감지하는 사람들이야말로 인간이나 인생의 본질에 더 가까운 존재들이라고 생각했다."
    },
    {
      "title": "마음속의 공허함을 채우는 방법",
      "content": "우울감의 기저에는 분노와 화라는 감정이 숨어있습니다. 많은 경우 숨어있지 않고 겉으로 드러나기도 합니다. 분노와 화의 감정은 주변 사람들을 대상으로 나타나기도 하지만 그 독성은 나에게로도 향합니다. 외부로 향하지 못하는 분노의 감정은 온전히 나를 공격합니다. 흔히 '감정의 기복이 심하다'는 형태로 표현되기도 합니다."
    },
    {
      "title": "실패에 우아할 것",
      "content": "당신의 과거는 당신의 미래를 정하기엔 힘이 약합니다. 당신은 실제로 힘든 시간을 보내왔지요. (...) 우리는 나와, 나의 강점과, 취약점과, 행복을 느끼는 지점들에 대해 계속 배우면서 나는 그때보다 너무 성장해버렸습니다. 이제 나를 해칠 수 있는 것은 나 외에는 없을 만큼, 나를 지킬 수 있을만큼, 나는 점차 어른이 되고 있어야 합니다."
    },
    {
      "title": "자기 미움이 타인 혐오가 된다",
      "content": "사실 내가 받아들이지 못하고 인정하지 못하는 나의 부정적 모습들은 ‘부정적’인 게 아니다. 부족하면 채우면 되고 잘못된 것은 고치면 된다. 문제는 그런 측면들을 ‘나의 모습’으로 받아들이지 못하고 마치 없는 것인 듯 외면, 억압하고 분리 및 회피하는 행위이다. 이는 잘못된 전략이다."
    },
    {
      "title": "외로움의 의미는 알아차리기, 그리고 외로움이 시키는 것은 하지 않기",
      "content": "일종의 ‘사람이 고픈’ 상태인 외로운 상태에서 사람들은 외로움을 해소하는 것과는 정반대의 방향으로 행동하기 쉬워지는 것이 얄궂습니다. 외로움이 불러일으킨 자기 보호 모드에서 사람은 타인의 얼굴 표정이나, 언행, 문자 메시지 같은 사회적 자극을 접했을 때 더욱 위협적이고 파국적인 해석을 선택하게 됩니다."
    },
    {
      "title": "자기 미움이 타인 혐오가 된다",
      "content": "사실 내가 받아들이지 못하고 인정하지 못하는 나의 부정적 모습들은 ‘부정적’인 게 아니다. 부족하면 채우면 되고 잘못된 것은 고치면 된다. 문제는 그런 측면들을 ‘나의 모습’으로 받아들이지 못하고 마치 없는 것인 듯 외면, 억압하고 분리 및 회피하는 행위이다. 이는 잘못된 전략이다."
    }
  ])

  const onPrevious = () => {
    if(data.index !== 0) {
      
    }
  }
  
  const onNext = () => {
    if(data.index > 0) {

    }
  }

    return (
        <div>
            <div className={ style.contentsDiv }>
                <div className={ style.titleDiv } name='title' value={ data.title }>{data.title}</div>
                <div className={ style.contentDiv } name='content' value={ data.content }>{data.content}</div>
                <div className={ style.buttonDiv }>
                    <button onClick={ onPrevious }>◀</button>
                    <button onClick={ onNext }>▶</button>
                </div>
            </div>
        </div>
    );
};

export default Contents;