import React from 'react';
import styled, { css } from 'styled-components';
import { FaGithub } from 'react-icons/fa'
import { useAnimation } from '../hooks/UseAnimation';
import { useMobile } from "../hooks/UseMobile";
import { useLocation } from "../hooks/UseLocation";

const ProjectBlock = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%; 
    padding-top: 55.4%; /* 8:5 Aspect Ratio => 62.5% */
    margin-bottom: 9.375rem; // 프로젝트 간 세로 간격
    @media screen and (min-width: 768px) {
      margin-bottom: 7.5rem;
    }
    @media screen and (min-width: 1024px) {
      margin-bottom: 0;
    }
`;

const ProjectPositioner = styled.div`
  position: absolute;
  top: -6.25rem;
  left: 0;
  width: 100%;
  height: 7.5rem;
  @media screen and (min-width: 1024px) {
      top: -7.5rem;
  }
`;


const StyleBar = styled.div`
    position: absolute; 
    top: -25px; 
    left: 50%;
    display: flex;
    align-items: center;
    padding: 0 1.6rem;
    width: 90%;
    height: 25px;
    border: 1px solid #e9e9e9;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transform: translateX(-50%);
    @media screen and (min-width: 768px) {
      width: 80%;
    }
    @media screen and (min-width: 1024px) {
      width: 60%;
    }
`;

const StyleDot = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #e9e9e9;
  & + & {
    margin-left: 7px;
  }
`;

const ProjectImage = styled.div`
    position: absolute; 
    top: 0; 
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    border: 1px solid #e9e9e9;
    border-top: none;
    background-color: #ffffff;
    transform: translateX(-50%);
    overflow: hidden;
    @media screen and (min-width: 768px) {
      width: 80%;
      height: 80%;
    }
    @media screen and (min-width: 1024px) {
      width: 60%;
      height: 60%;
    }
`;

const Image = styled.img`
    width: 95%;
    height: 95%;
    transition: transform 250ms ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
`;

const ProjectInfo = styled.div`
    width: 90%;
    min-height: 10%;
    position: absolute; 
    left: 50%; 
    bottom: 0;
    transform: translateX(-50%);
    @media screen and (min-width: 768px) {
      width: 80%;
      height: 20%;
    }
    @media screen and (min-width: 1024px) {
      width: 60%;
      height: 40%;
    }
`;

const Dl = styled.dl`
   position: absolute;
   top: 1.25rem;
   left: 0;
   width: 100%;
   display: flex;
   justify-content: space-between;
   margin: 0;
   @media screen and (min-width: 768px) {
      top: 1.875rem;
   }
   @media screen and (min-width: 1024px) {
      top: 2.5rem;
   }
`;

const InfoGroup = styled.div`
  &.github-group {
    position: relative;
  }
  & + & {
    margin-left: 2.5rem;
  }
`;

const Title = styled.dt`
  margin-bottom: 1.6rem;
  font-size: 1.125rem;
  font-weight: 400;
  ${props => props.mainColor && css`
      color: ${props.mainColor};
  `}
  @media screen and (min-width: 768px) {
    margin-bottom: 1.25rem;
  }
`;

const Description = styled.dd`
  margin-left: 0;
  font-size: 1.125rem;
  font-weight: 400;
  color: #333;
`;

const Link = styled.a`
  position: absolute;
  top: 25%;
  right: 0;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  transition: transform 250ms ease-in-out;
  & .github-icon {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translateX(-50%) scale(1.06);
  }
  @media screen and (min-width: 768px) {
    top: 60%;
    left: 50%;
  }
`;


function Project ({ project, type, languages, github, image, id, mainColor }) {
    const mobile = useMobile();
    return (
        <ProjectBlock>
            <ProjectPositioner id={id}></ProjectPositioner>
            <StyleBar>
                <StyleDot />
                <StyleDot />
                <StyleDot />
            </StyleBar>
            <ProjectImage {...useLocation(id)}>
                <Image src={image} alt={project} />
            </ProjectImage>
            <ProjectInfo>
                <Dl {...useAnimation('up', 100)}>
                    <InfoGroup>
                        <Title mainColor={mainColor}>Project</Title>
                        <Description>{project}</Description>
                    </InfoGroup>
                    {!mobile &&
                    <>
                    <InfoGroup>
                        <Title mainColor={mainColor}>Type</Title>
                        <Description>{type}</Description>
                    </InfoGroup>
                    <InfoGroup>
                        <Title mainColor={mainColor}>Languages</Title>
                        <Description>{languages}</Description>
                    </InfoGroup>
                    </>
                    }
                    <InfoGroup className="github-group">
                        {!mobile &&
                        <Title mainColor={mainColor}>Github</Title>
                        }
                        <Description>
                            <Link href={github} target="_blank">
                                <FaGithub className="github-icon" />
                            </Link>
                        </Description>
                    </InfoGroup>
                </Dl>
            </ProjectInfo>
        </ProjectBlock>
    );
}

export default Project;