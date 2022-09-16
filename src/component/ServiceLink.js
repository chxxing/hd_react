import { useState } from "react"

const SERVICE = [
    {
        id: 1, title: "증명서 발급조회",
        sub: [
            { title: "증명서 발급조회", link: "#!" },
            { title: "사용인감신고서 발급 조회", link: "#!" },
            { title: "재직증명서 발급 조회", link: "#!" },
        ]
    },
    {
        id: 2, title: "인트라넷",
        sub: [
            { title: "인트라넷", link: "#!" },
            { title: "자재협력시스템", link: "#!" },
            { title: "인사정보시스템", link: "#!" },
            { title: "그룹웨어", link: "#!" },
            { title: "디지털세금계산서", link: "#!" },
            { title: "전자구매입찰", link: "#!" },
        ]
    },
    {
        id: 3, title: "패밀리사이트",
        sub: [
            { title: "패밀리사이트", link: "#!" },
            { title: "현대아산", link: "#!" },
            { title: "현대무벡스", link: "#!" },
            { title: "현대경제연구원", link: "#!" },
            { title: "현대투자파트너스", link: "#!" },
            { title: "현대투자글로벌", link: "#!" },
            { title: "에이블현대호텔앤리조트", link: "#!" },
            { title: "현대종합연수원", link: "#!" },
        ]
    },
]

const ServiceLink = () => {
    const [slink, setSLink] = useState(0);
    return (
        <ul className="ServiceLink">
            {
                SERVICE.map((link, idx) => {
                    return (
                        <li key={link.id}>
                            <div className="title" onClick={() => setSLink(idx)}>{link.title}</div>
                            <ul className={"subLink " + (slink === idx ? 'on' : '')}>
                                {
                                    link.sub.map((sub, idx) => {
                                        return (
                                            <li key={sub.id}>{sub.title}</li>
                                        )
                                    })
                                }
                            </ul>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ServiceLink;
