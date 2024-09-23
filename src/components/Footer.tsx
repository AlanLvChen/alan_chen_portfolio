import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.customColors.footerBackground,
    padding: theme.spacing(3),
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
}));


const Footer = () => {
    const date = new Date().getFullYear();
    return <FooterContainer>
        <Typography variant="body2">
            © {date} Alan Chen
        </Typography>
    </FooterContainer>
}

export default Footer;