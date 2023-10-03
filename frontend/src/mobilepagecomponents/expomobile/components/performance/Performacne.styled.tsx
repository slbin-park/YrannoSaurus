import styled from 'styled-components';

const StyledPerformanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  /* min-width: 1120px;
  margin: 0px 200px 100px 200px; */
`;

const StyledNavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StyledNav = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 48px; */
  color: ${(props) => props.theme.colors.main};
  border-bottom: 5px solid ${(props) => props.theme.colors.main};
  /* padding-bottom: 10px; */
`;

const StyledPerformanceContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyeldPerformanceContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPerformanceInfo = styled.div`
  /* width: 500px; */
  height: auto;
  background-color: ${(props) => props.theme.colors.main};
  border-radius: 20px;
  padding: 20px 10px 0px;
`;

const StyledText = styled.div`
  font-family: ${(props) => props.theme.fonts.boldfont};
  /* font-size: 32px; */
  color: ${(props) => props.theme.colors.white};
  margin-bottom: 20px;
`;

const StyledMapContainer = styled.div`
  border: 2px solid ${(props) => props.theme.colors.main};
  margin-top: 20px;
  width: 100%;
  display: flex;
  margin-right: auto;
  margin-left: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const StyledTableHead = styled.thead`
  /* background-color: #f2f2f2; */
  border-bottom: 2px solid black;
`;

const StyledTableRow = styled.tr`
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const StyledContentContainer = styled.tbody`
  background-color: ${(props) => props.theme.colors.menu};
  cursor: pointer;
`;

const StyledContent = styled.td.attrs<any>((props) => ({}))`
  font-family: ${(props) => props.theme.fonts.blodfont};
  /* font-size: 14px; */
  color: ${(props) => (props.festivalID === props.id ? props.theme.colors.white : props.theme.colors.main)};
  background-color: ${(props) => (props.festivalID === props.id ? props.theme.colors.main : props.theme.colors.menu)};
  padding: 10px;
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.th`
  padding: 10px;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.blodfont};
  /* font-size: 14px; */
  color: ${(props) => props.theme.colors.main};
  background-color: ${(props) => props.theme.colors.menu};
  border-right: 2px solid ${(props) => props.theme.colors.white};
  &:last-child {
    border-right: none;
  }
`;

const CustomTableRow = styled(StyledTableRow)`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
`;
export {
  StyledPerformanceContainer,
  StyledNavContainer,
  StyledNav,
  StyledPerformanceContentContainer,
  StyeldPerformanceContent,
  StyledPerformanceInfo,
  StyledText,
  StyledTitle,
  StyledContent,
  StyledMapContainer,
  StyledTable,
  StyledTableHead,
  CustomTableRow,
  StyledContentContainer,
};