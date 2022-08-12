import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 0 13px;

    .header-tech{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        height: 32px;
        margin-top: 19px;

        h3{
            font-weight: 600;
            font-size: 16px;
            line-height: 18px;
            color: var(--color-grey-0);
        }
        button{
            width: 32px;
            height: 32px;
            background-color: var(--color-grey-3);
            color: var(--color-grey-0);
            border-radius: 4px;
        }

        @media (min-width: 1024px) {
            width: 775px;
            margin-top: 0;
        }
    }
`