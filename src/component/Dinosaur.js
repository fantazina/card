import React, { useState } from 'react';
import style from './css/Card.module.css'; 
import coel from './img/코엘로피시스.png';
import raeso from './img/레소토사우루스.png';
import scaly from './img/스켈리도사우루스.png';
import kenta from './img/켄타로사우루스.png';
import truedon from './img/트루돈.png';
import park from './img/파키케팔로사우루스.png';
import tree from './img/트리케라톱스.png';
import ella from './img/엘라스모사우루스.png';


const Dinosaur = () => {
    const data = ([ 
        {
            name : '코엘로피시스',
            content : '코엘로피시스는 후기 트라이아스기(2억 3백만 년 전 ~ 1억 9600만 년 전)에 살았으며 미국 뉴멕시코주 남서부, 애리조나주, 유타주 지역에서 발견된 육식공룡입니다. 수각류인 코엘로피시스 공룡은 몸집은 작았지만 당시에 먹이사슬에서 가장 꼭대기에 있는 포식자였습니다. 몸집이 작지만 속도와 민첩성은 최고의 조건을 갖추고 있었습니다.',
            photo : coel
        },
        {
            name : '레소토사우루스',
            content : '레소토사우루스는 전기 쥐라기 시대(2억 100만 년 전 ~ 1억 7400만 년 전)에 살았으며 남아프리카공화국에서 발견된 키가 1m의 아주 작은 초식공룡입니다. 남아프리카공화국의 레소토에서 발견되어 ‘레소토 도마뱀’이란 레소토사우루스 이름을 가지게 되었습니다. 조반류 중에 가장 원시적인 공룡에 속하며 도마뱀처럼 생긴 머리와 가늘고 긴 꼬리를 가졌습니다.',
            photo : raeso
        },
        {
            name : '스켈리도사우루스',
            content : '스켈리도사우루스는 전기 쥐라기 시대(2억 100만 년 전 ~ 1억 7400만 년 전)에 살았으며 유럽에서 발견된 머리가 사각형인 초식공룡입니다. 등과 꼬리에 갑옷처럼 골편이 많이 붙어 있으며 튼튼한 꼬리를 가지고 있습니다. 다리가 타조처럼 독특하여 ‘다리 도마뱀’이라는 스켈리도사우루스 이름을 가졌으며 조반류 중에서도 가장 초기 공룡이라서 조반류의 기원 및 진화 정보를 제공하고 있습니다. 켈리도사우루스는 검룡류와 곡룡류 공룡의 선조이기도 합니다',
            photo : scaly
        },
        {
            name : '켄타로사우루스',
            content : '켄트로사우루스는 후기 쥐라기(1억 6400만 년 전 ~ 1억 4500만 년 전)에 살았으며 동아프리카의 탄자니아에서 발견된 초식공룡입니다. 목부터 꼬리 끝까지 한 쌍으로 무시무시한 골창을 가지고 있어 ‘끝이 뾰족한 도마뱀’이라는 켄트로사우루스 이름을 가졌습니다. 네발로 걸었으나 앞다리와 뒷다리 차이가 커서 머리를 밑으로 향한 채 이동하였습니다.',
            photo : kenta
        },
        {
            name : '브라키오사우루스',
            content : '브라키오사우루스는 후기 쥐라기(1억 5400만 년 전 ~ 1억 5300만 년 전)에 살았으며 미국 콜로라도 주, 미국 유타 주에서 발견된 초식공룡입니다. 한때 가장 큰 공룡이었던 ‘브라키오사우루스’의 이름은 긴 앞다리에서 유래하였으며 ‘팔 도마뱀’이라는 뜻을 가진 이름입니다. 브라키오사우루스는 커다란 몸집을 잘 유지하기 위해서는 주로 먹었던 먹이들은 당시에 살았던 은행나무, 나무고사리, 커다란 소철, 그리고 다양한 침엽수들을 하루에 200~400kg이나 되는 먹이를 먹었을 것입니다.',
            photo : 'https://i.namu.wiki/i/Ejl5uFgRkPnT7xgqX6Jnt0fvvEAN89bUqvkTGNPjmmbd_D_HrcgT1q6qHEAInqAVKwDkOrN3mLtvNhpxNgVgYw.webp'
        },
        {
            name : '스테고사우루스',
            content : '스테고사우루스는 후기 쥐라기(1억 5500만 년 전 ~ 1억 5000만 년 전)에 살았으며 미국에서 발견된 초식공룡입니다. 검룡류 중에서 가장 많이 알려진 공룡이며, 스테고사우루스의 가장 큰 특징은 목부터 꼬리까지 한 쌍으로 가지고 있는 커다란 골판과 꼬리 끝에 있는 커다란 골침을 가지고 있는 것입니다. 커다란 골판 때문에 ‘지붕 도마뱀’이란 스테고사우루스 이름을 가지게 되었습니다. 앞다리와 뒷다리의 차이 때문에 빨리 뛸 수 없지만 스테고사우루스가 가지고 있는 무시무시한 꼬리 골침을 좌우로 휘둘러 육식공룡의 연약한 배나 다리를 찔러 육식공룡들과 맞서 싸웠을 것입니다. 몸 크기에 비해 뇌의 크기가 매우 작아 명석하지 못한 두뇌를 소유한 공룡으로 손꼽힙니다.',
            photo : 'https://i.namu.wiki/i/UtxwjstN5kQGOWcFd6Qg0XNKh5bIJplEy5oY5-hQryWNxQwv8qAn2sX-kzgBkjVxQ1oNMlYpS_t5sLRrv6aveA.webp'
        },
        {
            name : '스피노사우루스',
            content : '스피노사우루스는 백악기(1억 1200만 년 전 ~ 9700만 년 전)에 살았으며 북아프리카의 이집트, 모로코, 니제르지역에서 발견된 육식공룡입니다. 수각류인 스피노사우루스는 ‘가시 도마뱀’이란 의미를 가지고 있습니다. 가장 큰 특징은 등 위로 부채모양의 돛을 가지고 있다는 점입니다. 등뼈가 길어지면서 생긴 돛은 체온 조절과 다른 공룡에게 위협적으로 느낄 수 있게 몸을 더 크게 보이는 기능과 효과를 가지고 있었습니다.',
            photo : 'https://i.namu.wiki/i/JdFsri43s6ANoAG4ovZ9qtoxnhl1sBP4c4notP-cez8QZxGytMcFmf28ARtep48nUfiNP8o7SPSvQIRjaTnoRA.webp'
        },
        {
            name : '트루돈',
            content : '트루돈은 후기 백악기(7700만 년 전 ~ 6900만 년 전)에 살았으며 미국의 몬태나주, 와이오밍주, 알래스카지역과 캐나다지역에서 발견된 육식공룡입니다. 수각류인 트루돈은 ‘상처 난 이빨’이라는 의미를 가지고 있는데 발견된 화석을 통하여 이빨이 크게 구부러져 있으며 뒷면에는 톱니날이 있었습니다. 가장 특별한 점은 모든 공룡 중에서 몸 크기에 비해 가장 큰 뇌를 가지고 있었습니다. 큰 뇌를 이용하여 지능적으로 사냥했을 것으로 추측하고 있으며 무리지어 협력하여 사냥 했을 것으로 예상됩니다.',
            photo : truedon
        },
        {    
            name : '파라사우롤로푸스',
            content : '파라사우롤로푸스는 후기 백악기(7650만 년 전 ~ 7300만 년 전)에 살았으며 미국 서부에서 발견된 초식공룡입니다. 파라사우롤로푸스의 가장 큰 특징은 볏을 포함한 두개골의 길이가 1.6~2미터에 이를 정도로 큰 크기를 가지고 있으며, 오리주둥이를 가지고 있는 조반류 공룡입니다. 파라사우롤로푸스는 희귀한 공룡 중 하나이며 가장 진화한 초식공룡 중 하나입니다. 커다란 볏 때문에 “볏을 가진 도마뱀에 가까운” 뜻을 가진 파라사우롤로푸스 이름을 가지게 되었습니다.',
            photo : 'https://i.namu.wiki/i/ji2bZ38F-t8FYuYlrGAg5Q15cmwYgQiTnSMnm3knHJe1hD3Q4kSs9_0ivb-LT_p8pFFhdIopY2doi36_nR2lLQ.webp'
        },
        {
            name : '파키케팔로사우루스',
            content : '파키케팔로사우루스는 후기 백악기(7000만 년 전 ~ 6600만 년 전)에 살았으며 미국 서부와 캐나다에서 발견된 초식공룡입니다. 후두류에 속하는 파키케팔로사우루스는 머리에 볼록 솟아 올라온 머리뼈와 머리 주위의 돌기가 있는 것이 가장 큰 특징입니다. 돔 머리 형태를 가지고 있어 ‘두꺼운 머리 도마뱀’이란 파키케팔로사우루스 이름을 가지게 되었습니다. 이족보행을 하였으며 날렵한 몸집과 잘 발달된 뒷다리를 이용하여 도망을 갔을 것으로 추측하고 있습니다.',
           photo : park
        },    
        {
            name : '트리케라톱스',
            content : '트리케라톱스는 후기 백악기(6800만 년 전 ~ 6500만 년 전)에 살았으며 북아메리카에서 발견된 각룡류인 초식공룡입니다. 트리케라톱스는 머리에 세 개의 뿔과 넓은 프릴을 가진 특징을 가졌습니다. 길이는 약 7.9~9m이며, 무게는 6~12ton으로 각룡류 중에서 몸집이 큰 편에 속하여 육상 공룡 중 머리가 가장 큰 것에 속하고 있습니다. 큰 몸집으로 빨리 달릴 수 없는 트리케라톱스는 커다란 뿔을 가지고 있어 육식공룡의 공격에 정면으로 싸웠을 것으로 추측하고 있습니다.',
            photo : tree
        },
        {
            name :'티라노사우루스',
            content : '티라노사우루스는 후기 백악기(6700만 년 전 ~ 6500만 년 전)에 살았으며 캐나다, 미국, 아시아지역에서 발견된 육식공룡입니다. 수각류인 티라노사우루스는 가장 잘 알려진 공룡으로써 티라노사우루스라는 이름의 의미는 ‘폭군 도마뱀’이라는 의미를 가지고 있습니다. 수각류인 티라노사우루스는 날카로운 원뿔형 이빨(정단면이 ‘D’자-모양)을 가지고 있으며 길고 잘 발달된 뒷다리와 강한 근육으로 포식자 중 최고의 포식자였습니다.',
            photo : 'https://i.namu.wiki/i/GSeVO_paGdNmUbYyFiLIR4pxBY3m2XuJuOHbF-nCwXsLx3anVknjmaKS0mcTaBXKylyV0MKs993_WRCEjs6yQA.webp'
        },
        {
            name : '안킬로사우루스',
            content : '안킬로사우루스는 후기 백악기(6650만 년 전 ~ 6600만 년 전)에 살았으며 북아메리카에서 발견된 초식공룡입니다. 머리에서 꼬리까지 골편을 가지고 있는 공룡으로써 ‘안킬로사우루스’라는 이름은 융합된 도마뱀이라는 뜻을 가지고 있습니다. 곡룡류에 속하는 안킬로사우루스의 가장 큰 특징은 꼬리부분에 커다란 곤봉을 가지고 있는 것입니다. 최신 연구(2009년)에 의하면 같은 종족들간의 전투에서 사용되었는지 다른 육식공룡들의 공격에 막기 위한 방어용 무기였는지 아직 확실하게 밝혀진 바 없습니다.',
            photo : 'https://i.namu.wiki/i/LBRk_wE703prn2o-TcrsQRWLhBYkWtu2m7AUK3D55OmieLS1B3uo5vkdfm6zsTfXXzrqwusG7AcN50vfOEH78g.webp'
        },
        {
            name : '프테라노돈',
            content : '백악기 후기에 서식한 익룡의 한 종류입니다. 테라노돈, 익수룡이라고도 하며 날개를 펴면 8m에 이르렀으나 몸은 비교적 작고, 뼈는 새처럼 가볍고 튼튼합니다. 용골은 대단히 크고, 날개를 움직이는 가슴 근육이 붙어 있습니다. 새나 박쥐와 달리 앞발의 네 번째 발가락이 길게 늘어나 그 발가락 위에 가죽 날개가 붙어 있었으며 나머지 발가락은 작고, 갈고리 모양의 발톱이 있어 바위나 큰 나뭇가지에 박쥐처럼 매달리는 데 사용된 것으로 추측합니다.',
            photo : 'https://mblogthumb-phinf.pstatic.net/MjAxODEyMTRfMTE5/MDAxNTQ0Nzg3MDk4MDY1.NJ2AUZ1-HrKuXjF4pVBlCm5K-kCZFV_ag1YvA-ywG0kg.6mneiX21JDWOa8Cyy2YPaGDWt01RnHZy8oqPgc8rE-Eg.PNG.dr_trex/pteranodon-flyers-ride-dinosaur-f.png?type=w800'
        },
        {
            name : '엘라스모사우루스',
            content : '‘판 도마뱀’이라는 뜻으로 백악기 후기의 대표적인 수장룡입니다. 수장룡 중에서 몸과 목이 가장 길며 목의 길이는 몸 길이의 반이 넘는 8m이고, 목뼈는 자그마치 75개나 되어 목만 봤을 때는 마치 뱀 같습니다. 목은 매우 유연해 어떤 방향이든지 자유롭게 움직일 수 있었습니다. 이 긴 목을 이용해 물고기를 잡으려고 수면 가까이 날아다니는 익룡을 잡아먹었을 것으로 추측됩니다. 머리는 몸에 비해 매우 작고, 입에는 날카로운 이빨이 줄지어 나 있습니다.',
            photo : ella
        },
        {
            name : '벨로키랍토르',
            content : '백악기 후기에 서식한 용반목과인 육식공룡입니다. ‘날쌘 도둑’이라는 뜻으로, 몸의 생김새로 보아 재빠른 몸놀림에 머리도 아주 좋은 공룡이었을 것입니다. 머리는 길쭉하고 입은 납작하며 이빨은 날카롭습니다. 이들은 무리를 지어 사냥하였으며 튼튼한 꼬리와 뒷다리, 발가락에 있는 크고 날카로운 발톱을 이용해 사냥감을 향해 높이 뛰어올라 날카로운 발톱으로 찍었을 것으로 추측됩니다.',
            photo : 'https://mblogthumb-phinf.pstatic.net/MjAxOTA1MTFfMTA2/MDAxNTU3NTAyODI4MjAx.wmpHoWMvCTI4Jsbo-54bHpm-lfpljb0Y0qCveqV9LPIg.wNJUxoE107zf96nxncPR2s4CEpJxJNQ7Gc902V2dIF8g.PNG.dr_trex/jurassic_park___velociraptor__by_camo_flauge-dcewck1.png?type=w800'
        }
    ])

    const[page, setPage] = useState(0)

    const onPrevious = () => {
        if(page !== 0) {
            setPage(page - 1)
        }
    }

    const onNext = () => {
        if(page < data.length - 1) {
            setPage(page + 1)
        }
    }

    return (
        <div className={style.background}>
            <div className={ style.dinosaurDiv }>
                <h1>지나가 좋아하는</h1>
                <div style={{ display : 'flex' }}>
                    <img className={ style.photo } src={ data[page].photo }/>
                    <div className={ style.contents_Div }>
                        <div className={ style.title_Div }>
                            <p>이름 : { data[page].name }</p>
                        </div>

                    <div className={ style.content_Div }>
                    <p>{ data[page].content }</p>
                    </div>

                    <div className={ style.button_Div }>
                        { page > 0 && <button onClick={ onPrevious } style={{ float:'left' }}>{data[page - 1].name}</button> }
                        <button onClick={ onNext } style={{ float:'right' }}>{data[page + 1].name}</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dinosaur;