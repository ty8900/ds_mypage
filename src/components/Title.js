import React, { Component } from 'react';
import "./Title.css";


class Title extends Component {

    render() {
        return (
            <div className="title_background">
                <h1 id="title"> 
                    Heo Dong Seok (허동석) </h1>
                <hr/>
                <div className="container">
                <div className="leftside">
                 <h2>
                     학력
                 </h2>
                 <h3>
                     서울대학교 컴퓨터공학부 18학번 5학기 이수(2018/3~)
                 </h3>
                 <h5>
                     주요과목 : 시스템 프로그래밍, 소프트웨어 개발의 원리와 실습,
                     컴퓨터구조, 데이터베이스 등
                 </h5><br/>
                 <h2>
                     활동
                 </h2>
                 <h3>
                     2020 인공지능 온라인 경진대회 (2020/6, 62/400팀)<br/><br/>
                 </h3>
                </div>
                <div className="rightside">
                 <h2>
                     주요 프로젝트
                 </h2>
                 <h3>
                     &middot; Unity 2D RPG Game 3인 project 'DSsoldier' (2019/7, stopped)<br/><br/>
                     &middot; SNU wiki/petition website 'SNUVOICE' (2019/9~12, in SWPP)<br/>
                     >> https://github.com/swsnu/swpp2019-team8<br/><br/>
                     &middot; NC Winter Internship in Game AI Lab (2020/1~2)<br/>
                     >> Match-3 game에의 강화 학습 적용 연구<br/><br/>
                     &middot; Instru salvage project (2020/7~8)<br/>
                     >> 대학동아리 Cyworld club 데이터 네이버 카페로 크롤링/복원 프로젝트<br/>
                 </h3>
                </div>
                </div>
            </div>
        );
    }
}
export default Title;