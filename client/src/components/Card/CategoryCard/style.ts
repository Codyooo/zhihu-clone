import styled from 'styled-components';

export const CategoryCardWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 296px;
  height: 177px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background: #fff;
  padding: 10px;
  padding-left: 10px;

  .category-item {
    height: 52px;
    font-size: 14px;
    cursor: pointer;
    color: rgb(133, 144, 166);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 33%;

    &.live {
      :hover {
        color: rgb(255, 207, 0);
      }
      svg {
        fill: rgb(255, 207, 0);
      }
    }

    &.book-store {
      :hover {
        color: rgb(67, 212, 128);
      }
      svg {
        fill: rgb(67, 212, 128);
      }
    }

    &.round-table {
      :hover {
        color: rgb(0, 132, 255);
      }
      svg {
        fill: rgb(0, 132, 255);
      }
    }

    &.column {
      :hover {
        color: rgb(15, 136, 235);
      }
      svg {
        fill: rgb(15, 136, 235);
      }
    }

    &.consult {
      :hover {
        color: rgb(84, 120, 240);
      }
      svg {
        fill: rgb(84, 120, 240);
      }
    }
  }
`;
