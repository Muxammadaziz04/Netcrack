import styled from "@emotion/styled";
import colors from "./colors";

const Subtitle = ({
    children,
    as = 'h2',
    color = 'green',
    ...other
}) => {
    const textColor = colors[color] ?? color
    const SText = styled(as)`
        font-size: ${props => props.fontSize ?? 24}px;
        font-weight: ${props => props.fontWeight ?? 500};
        line-height: ${props => props.lineHeight ?? 32}px;
        letter-spacing: ${props => props.letterSpace ?? 0}px;
        text-align: ${props => props.textAlign ?? 'start'};
        color: ${textColor};
    `
    return (
        <SText {...other}>
            {children}
        </SText>
    );
}

export default Subtitle;