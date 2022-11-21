import React from "react";

import { Wrapper,Content } from "./footer";

const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div>
                <a href="" target='_blank' >Tesla-Clone &copy; 2022</a>
                </div>
                <div>
                <a href="mailto:mayurshelar1098@gmail.com" target='_blank'>Gmail</a>
                <a href="" target="_blank" >LinkedIn</a>
                <a href="https://github.com/MS1098" target="_blank" >GitHub</a>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer