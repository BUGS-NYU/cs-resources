import React from 'react';
import styled from 'styled-components';

const GroupNav = ({items, groupName, path}) => {
    return (
        <ContentNavWrapper>
            <Slug>{path.match(/.*(?=\/)/g)}</Slug>
            <Title>{groupName}</Title>
            <ItemsList>
                {items.map((item) => (
                    <li className = 'Item'><a href = {item.path}>{item.title}</a><span>{item.tag}</span></li>
                ))}
            </ItemsList>  
        </ContentNavWrapper>
    )
}

export default GroupNav;


const ContentNavWrapper = styled.div`
    padding-left: 3rem;
    padding-top: 3rem;
`;
const Slug = styled.p`
font-weight: 300;
font-size: .9rem;
opacity: .5;
`

const Title = styled.h1`
    margin-top: 2rem;
    font-weight: 500;
    font-size: 2rem;
`

const ItemsList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  margin-left: 2rem;
  .Item, .activeItem {
    margin-top: 1rem;
    color: var(--color-text);
    font-size: 1.1rem;
    font-weight: 300;
    cursor: pointer;
    span {
        color: #FFFFFF;
        font-size: .8rem;
        background: rgba(26, 26, 26, 0.852);
        border-radius: 3px;
        margin-left: .5rem;
        padding: 2px 7px 2px 7px;
        border-radius: 5px;
    }
  }
  & > .Item {
    font-weight: 400;
  }
  & > ul {
    list-style: none;
    margin-left: 1rem;
  }
  & .Item::before {
    content: "•";
    color: var(--color-outerBulletPoint);
    display: inline-block;
    font-size: 2rem;
    width: 1rem;
    line-height: 72%;
    margin-left: -1rem;
    position: relative;
    top: 0.25rem;
  }
  .activeItem::before {
    content: "•";
    color: #8041B7;;
    display: inline-block;
    font-size: 2rem;
    width: 1rem;
    line-height: 72%;
    margin-left: -1rem;
    position: relative;
    top: 0.25rem;
  }
`;