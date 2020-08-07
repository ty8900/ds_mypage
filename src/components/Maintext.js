import React, { Component } from 'react';


import "./Maintext.css";


class Maintext extends Component {
    state= {
        first: true,
        src1: ["https://i.imgur.com/qrUIMrO.png","https://i.imgur.com/s7Az9GU.png",
        "https://i.imgur.com/JgUpSbv.png","https://i.imgur.com/d0gudhD.png"],
        src2: ["https://i.imgur.com/OS2jRQv.png","https://i.imgur.com/wOQjhzP.png",
        "https://i.imgur.com/Sj41S11.png","https://i.imgur.com/jC7kMih.png"],
        txt1: ["2d rpg DSSoldier", "SNUVOICE Poster", "revised match-3 game", "cyworld club"],
        txt2: ["simple dodge game", "SNUVOICE petition sample", "success rate of my dqn model", "naver cafe"]
    }

    componentDidMount() {
        setInterval(this.rotate, 8000);
    }

    rotate = () => {
        this.setState({first: !this.state.first});
    }


    render() {  
        var src,txt; 
        if(this.state.first) {
            src = this.state.src1;
            txt = this.state.txt1;
        } else {
            src = this.state.src2;
            txt = this.state.txt2;
        }
        return (
            <div className="Maintext">
            <div className="what">
                <h1>What I did</h1>
            </div>
            <div className="main_container">
             <div className="unity">
                <img src={src[0]} width='450'height='350'alt="unity"></img>
                <h4>{txt[0]}</h4>
             </div>
             <div className="swpp">
                <img src={src[1]} width='450'height='350'alt="snuvoice"></img>
                <h4>{txt[1]}</h4>
             </div>
             <div className="nc">
                <img src={src[2]} width='450'height='350'alt="match3"></img>
                <h4>{txt[2]}</h4>
             </div>
             <div className="cy">
                <img src={src[3]} width='450'height='350'alt="cyworld"></img>
                <h4>{txt[3]}</h4>
             </div>
            </div></div>
        );
    }
}
export default Maintext;