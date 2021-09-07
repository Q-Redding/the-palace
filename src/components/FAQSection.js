import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import lines from '../img/lines.svg';
import questions from '../questions';
import Question from './Question';
function FAQSection() {
    return (
        <FaqStyled>
            <InnerLayout>
                <h3 className="small-heading">Frequently <span>asked questions</span></h3>

                <div className="lines">
                    <img src={lines} alt="" />
                </div>

                <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>
                
            </InnerLayout>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    .questions-con{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }
    .small-heading{
        font-size: 3rem;
        text-align: center;
        margin-top: 60px;
    }
`;

export default FAQSection;