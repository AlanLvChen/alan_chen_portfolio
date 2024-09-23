import { Box, Button, Typography } from "@mui/material"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



const HomePage = () => {
    return (
        <>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h3" component="h1" sx={{ marginBottom: 1 }}>
                    Alan Chen
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Frontend Developer
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>Let's make beautiful and engaging experiences.</Typography>

                <Box>

                    <Link to="photos" >
                        Photos
                    </Link>
                    <Link to="/">Resume</Link>
                    <Link to="/">Experience</Link>
                    <Link to="/">Projects</Link>
                </Box>
            </Box >
            <Footer />
        </>
    )
}

export default HomePage;