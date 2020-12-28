import styled from 'styled-components';

export const List = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Row = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    background-color: transparent;
    border: 0;
    text-align: inherit;
    font-size: inherit;
    border-radius: 2px;
    transition: background-color 0.218s ease;

    &:not(:last-child) {
        margin-bottom: 12px;
    }

    ${({ isActive }) => isActive ? (`
        background-color: #cddcf7;
    `) : (`
        &:hover {
            background-color: #eee;
        }
    `)}
`;

export const RowData = styled.div`
    padding-left: 12px;
    flex-grow: 1;
`;

export const Name = styled.div`
    margin-bottom: 4px;
    font-weight: bold;
`;

export const Message = styled.div`

`;
