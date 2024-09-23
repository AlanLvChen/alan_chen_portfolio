import { Box, Button, Typography } from "@mui/material"
import Footer from "../components/Footer";



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

                {/* Links */}
                <Box>
                    <Button variant="contained" href="https://example.com" sx={{ marginRight: 1 }}>
                        Link 1
                    </Button>
                    <Button variant="contained" href="https://example.com" sx={{ marginRight: 1 }}>
                        Link 2
                    </Button>
                    <Button variant="contained" href="https://example.com">
                        Link 3
                    </Button>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default HomePage;