import React, { Component } from 'react';
import './Main.scss';


class Main extends Component {
    render() {
        return (
            <div className="main">
                <nav>
                    <div className="instagram-logo">
                        <svg version="1.1" id="Capa_1"
                        viewBox="0 0 512 512" width="20px">
                            <path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                            C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                            H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                            V363.272z"/>
                            <path d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
                            c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"/>
                            <circle cx="396" cy="116" r="20"/>
                        </svg>
                        <span className="instagram-icon">Wetstagram</span>
                    </div>
                    <div className="search">
                        <input type="text" className="search-bar" placeholder="검색" />
                        {/* <div className="search-all disappear">
                            <div className="search-engine">
                                <div className="parent">
                                <div className="search-contents">
                                    <div className="gradient">
                                        <img src="img/jenny.jpeg" alt="스토리 프로필 사진" />
                                    </div>
                                    <div>
                                        <p className="user-id">jenny0305</p>
                                        <p className="user-name">hi im jenny💙</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="search-squre"></div>

                        </div> */}
                    </div>
                    <div className="icons">
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore-icon" />
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart-icon" />
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile-icon" />
                    </div>
                </nav>
                    <div className="margin-value">
                        <div className="feeds-setting">
                            <div>
                                <div className="title-profile">
                                    <img src="img/eyesmag.jpeg" alt="eyemag님의 프로필 사진" />
                                    <span>eyesmag</span>
                                    <svg className="dot" fill="#262626" version="1.1" id="Capa_1" 
                                    viewBox="0 0 426.667 426.667">
                                        <circle cx="42.667" cy="213.333" r="42.667"/>
                                        <circle cx="213.333" cy="213.333" r="42.667"/>
                                        <circle cx="384" cy="213.333" r="42.667"/>
                                    </svg>
                                </div>
                                <img src="img/234128717_201051705239434_4340604012078037440_n.jpeg" className="main-image" alt="메인 이미지" />
                                <div className="feeds-contents">
                                    <div className="feeds-icons">
                                        <svg className="heart-icon" viewBox="0 -28 512.001 512">
                                            <path d="m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0"/>
                                        </svg>
                                        <svg className="talk-icon" fill="#262626" viewBox="0 0 512 512" >
                                            <path d="M256,0C114.848,0,0,114.848,0,256c0,49.216,13.792,96.48,39.936,137.216L1.152,490.048
                                            c-2.368,5.952-0.992,12.736,3.552,17.28C7.744,510.368,11.84,512,16,512c2.016,0,4-0.384,5.952-1.152l96.832-38.784
                                            C159.52,498.208,206.784,512,256,512c141.152,0,256-114.848,256-256S397.152,0,256,0z M256,480
                                            c-45.632,0-89.312-13.504-126.272-39.072c-2.688-1.888-5.888-2.848-9.088-2.848c-2.016,0-4.032,0.384-5.952,1.152l-69.952,28.032
                                            l28.032-69.952c1.984-4.992,1.344-10.656-1.696-15.04C45.504,345.312,32,301.632,32,256C32,132.48,132.48,32,256,32
                                            s224,100.48,224,224S379.52,480,256,480z"/>
                                        </svg>
                                        <svg className="share-icon" viewBox="0 0 551.13 551.13">
                                            <path d="m465.016 172.228h-51.668v34.446h34.446v310.011h-344.457v-310.011h34.446v-34.446h-51.669c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223z"/><path d="m258.342 65.931v244.08h34.446v-244.08l73.937 73.937 24.354-24.354-115.514-115.514-115.514 115.514 24.354 24.354z"/>
                                        </svg>
                                        <svg className="save-icon" viewBox="0 0 48.065 48.065">
                                            <path d="M40.908,0H7.158c-0.553,0-1,0.448-1,1v46.065c0,0.401,0.239,0.763,0.608,0.92c0.369,0.157,0.797,0.078,1.085-0.2
                                            l16.182-15.582l16.182,15.582c0.189,0.183,0.439,0.28,0.693,0.28c0.132,0,0.266-0.026,0.392-0.08c0.369-0.157,0.608-0.52,0.608-0.92
                                            V1C41.908,0.448,41.46,0,40.908,0z M39.908,44.714L24.726,30.095c-0.193-0.187-0.443-0.28-0.693-0.28s-0.5,0.093-0.693,0.28
                                            L8.158,44.714V2h31.75V44.714z"/>
                                        </svg>
                                    </div>
                                    <div className="feeds-like">
                                        <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" className="feeds-commentimage" alt="좋아요한 프로필 사진" />
                                        <span><span className="like-bold">0hyun0hyun</span>님<span className="like-bold">외 10명</span>이 좋아합니다</span>
                                    </div>
                                    <div className="feeds-writing">
                                        <span className="comment-id">eyesmag </span><span> 송원아트센터에서 진행하는 뉴 랜덤 다이버시티 전시 📷</span>
                                    </div>
                                    <div className="feeds-comment">
                                    </div>
                                    <span className="time">42분 전</span>    
                                </div>
                                <div className="comment">
                                    <input type="text" className="typing-comment" placeholder="댓글 달기..."/>
                                    <button className="comment-button" type="button">게시</button>
                                </div>
                            </div>
                        </div>
                        <div className="main-right">
                            <div className="user">
                                <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" alt="사용자 프로필 사진" />
                                <div>
                                    <p className="user-id">0hyun0hyun</p>
                                    <p className="user-name">김영현</p>
                                </div>
                            </div>
                            <div className="story">
                                <div className="story-title">
                                    <span>스토리</span>
                                    <span>모두 보기</span>
                                </div>
                                <div className="story-down">
                                    <div className="story-contents">
                                        <div className="gradient">
                                            <img src="img/jenny.jpeg" alt="스토리 프로필 사진" />
                                        </div>
                                        <div>
                                            <p className="user-id">jenny0305</p>
                                            <p className="user-name">hi im jenny💙</p>
                                        </div>
                                    </div>
                                    <div className="story-contents">
                                        <div className="gradient">
                                            <img src="img/woziin.jpeg" alt="스토리 프로필 사진" />
                                        </div>
                                        <div>
                                            <p className="user-id">wooziin</p>
                                            <p className="user-name">안경박사 우진👓</p>
                                        </div>
                                    </div>
                                    <div className="story-contents">
                                        <div className="gradient">
                                            <img src="img/go.jpeg" alt="스토리 프로필 사진" />
                                        </div>                            
                                        <div>
                                            <p className="user-id">gomikyo</p>
                                            <p className="user-name">miko</p>
                                        </div>
                                    </div>
                                    <div className="story-contents">
                                        <div className="gradient">
                                            <img src="img/local.jpeg" alt="스토리 프로필 사진" />
                                        </div>                            
                                        <div>
                                            <p className="user-id">lockalkim</p>
                                            <p className="user-name">현지인</p>
                                        </div>
                                    </div>
                                    <div className="story-contents">
                                        <div className="gradient">
                                            <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" alt="스토리 프로필 사진" />
                                        </div>                            
                                        <div>
                                            <p className="user-id">psg</p>
                                            <p className="user-name">paris🇫🇷</p>
                                        </div>
                                    </div>
                                    <div className="story-contents">
                                        <div className="gradient">
                                            <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" alt="스토리 프로필 사진" />
                                        </div>                            
                                        <div>
                                            <p className="user-id">0hyun0hyun</p>
                                            <p className="user-name">김영현</p>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="recommend">
                                <div className="recommend-title">
                                    <span>회원님을 위한 추천</span>
                                    <span>모두 보기</span>
                                </div>
                                <div className="recommend-down">
                                    <div className="recommend-contents">
                                        <img src="img/paris.jpeg" alt="추천 사진" />
                                        <div>
                                            <p className="user-id">psg</p>
                                            <p className="user-name">0hyun0hyun님 외 2명이...</p>
                                        </div>
                                    </div>
                                    <div className="recommend-contents">
                                        <img src="img/mach.jpeg" alt="추천 사진" />
                                        <div>
                                            <p className="user-id">manchesterunited</p>
                                            <p className="user-name">0hyun0hyun님 외 2명이...</p>
                                        </div>
                                    </div>
                                    <div className="recommend-contents">
                                        <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" alt="추천 사진" />
                                        <div>
                                            <p className="user-id">jeenny</p>
                                            <p className="user-name">0hyun0hyun님 외 2명이...</p>
                                        </div>
                                    </div>
                                    <div className="recommend-contents">
                                        <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" alt="추천 사진" />
                                        <div>
                                            <p className="user-id">0hyun0hyun</p>
                                            <p className="user-name">0hyun0hyun님 외 2명이...</p>
                                        </div>
                                    </div>
                                    <div className="recommend-contents">
                                        <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" alt="추천 사진" />
                                        <div>
                                            <p className="user-id">0hyun0hyun</p>
                                            <p className="user-name">0hyun0hyun님 외 2명이...</p>
                                        </div>
                                    </div>
                                    <div className="recommend-contents">
                                        <img src="img/177919409_466024897787486_7015720230700328365_n.jpeg" alt="추천 사진" />
                                        <div>
                                            <p className="user-id">0hyun0hyun</p>
                                            <p className="user-name">0hyun0hyun님 외 2명이...</p>
                                        </div>
                                    </div>
                                </div>    
                            </div>

                            <div className="information">
                                <p>instagram 정보 ・ 지원 ・ 홍보 센터 ・ API ・ 채용 정보 ・ 개인정보처리방침 ・ 약관 ・ 디렉터리 ・ 프로필 ・ 해시태그 ・ 언어</p>
                                <p>ⓒ 2021 INSTAGRAM</p>
                            </div>
                        </div>
                    </div>
        </div>
        );
    }
}

export default Main;