import styled from 'styled-components';

export const Wrapper = styled.div`
    display: inline-flex;
    flex-shrink: 0;
    width: ${({ propSize }) => propSize};
    height: ${({ propSize }) => propSize};
    position: relative;
    oveflow: hidden;
    border-radius: ${({ borderRadius }) => borderRadius};
    background-color: #0edde6;
    // box-shadow: 0 1px 0 0 rgba(0,0,0,.15);
`;

export const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
