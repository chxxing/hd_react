import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: "The No.1 for 14years, we continue to make history of elevators in Korea", desc: "14년 연속 1위로 대한민국 엘리베이터의 역사를 만들어 갑니다.", dot: "부산국제금융센터(BIFC)", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
    { id: 2, content: "The world expands along the new path createdby Hyundai Elevator", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", dot: "바라얍 메르디안 호텔 (터키)", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
    { id: 3, content: "현대엘리베이터 스마트 테크놀로지 체험", desc: "2021 한국국제승강기엑스포 VR투어", dot: "VR체험", link: "https://my.matterport.com/show/?m=yEdf9FWaNav" },
]

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        // dots: true,
        afterChange: index => setIDX(index),
        autoplay: true,
        autoplaySpeed: 4000,
        // fade: true,
    }
    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'itm0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <h2>{slide.content}</h2>
                                    <p>{slide.desc}</p>
                                    <a href={slide.link} target='_blank'>VIEW MORE</a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>
            {console.log(mainSlide.current)}
            <div className="slideNum">
                0{IDX + 1}<span> / 0{SLIDE.length}</span>
            </div>
            <ul className="slideTab">
                {
                    SLIDE.map((dots, idx) => {
                        return (
                            <li key={dots.id} className={idx === IDX ? 'on' : ''}>{dots.dot}</li>
                        )
                    })
                }
            </ul>
            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className="xi-arrow-left"></i></button>
                <button onClick={() => mainSlide.current.slickNext()}> <i className="xi-arrow-right"></i></button>
            </div>
        </section >
    )
}

export default MainVisual;