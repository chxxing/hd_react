import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const PTF = [
    { id: 1, title: "서울시청" },
    { id: 2, title: "서울드래곤시티(용산호텔)" },
    { id: 3, title: "부산 파크하얏트" },
    { id: 4, title: "송도 G타워" },
    { id: 5, title: "롯데월드몰" },
    { id: 6, title: "파라다이스시티호텔" },
    { id: 7, title: "명동 대신증권 신사옥" },
    { id: 8, title: "부산국제금융센터(BIFC)" },
    { id: 9, title: "LG U+ 신사옥" },
]

const Portfolio = () => {
    return (
        <section className="Portfolio csc">
            <div className="container">
                <div className="left">
                    <div className="slide">
                        <Slider fade={true}>
                            {
                                PTF.map(building => {
                                    return (
                                        <figure>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/main_m0" + building.id + ".jpg"} alt="" />
                                            </div>
                                            <div className="des">{building.title}</div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
                <div className="right">
                    <h2>건물의 가치를 높이는 현대엘리베이터</h2>
                    <p>특별한 기술을 실현할수록 여러분의 삶의 무대도 특별해 집니다.</p>
                    <div className="arrows">
                        <i className="xi-angle-left"></i>
                        <i className="xi-angle-right"></i>
                    </div>
                    <div className="slide">
                        <Slider>
                            {
                                PTF.map(building => {
                                    return (
                                        <figure>
                                            <div className="box">
                                                <img src={process.env.PUBLIC_URL + "/assets/images/main_m0" + building.id + ".jpg"} alt="" />
                                            </div>
                                            <div className="des">{building.title}</div>
                                        </figure>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Portfolio;