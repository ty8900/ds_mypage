import React, { Component } from 'react';
import { GoMarkGithub, GoMail } from 'react-icons/go';


import "./Icons.css";


class Icons extends Component {

    render() {
        return (
            <div className="icons">
            <h4>Contact</h4>
            <GoMarkGithub
                    id='github_icon'
                    onClick={()=>window.location.href='https://github.com/ty8900'}
                    size='50px'></GoMarkGithub>
            <GoMail
                    id='email_icon'
                    onClick={()=>window.location.href='mailto:ty8900@naver.com'}
                    size='50px'></GoMail>
            </div>
        );
    }
}
export default Icons;