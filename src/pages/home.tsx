import { Box, Container, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';
import ReactGA4 from 'react-ga4';

export const Home: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        ReactGA4.send({
            hitType: 'pageview',
            page_path: location.pathname,
            page_title: document.title,
        });
    }, [location]);



    return (
        <Container >
            <Box className='container'>
                <Grid container spacing={2} justifyContent={"center"}>
                    <Grid size={{ xs: 10 }} className='home-container'>
                        {/* <CurrentYearPhoto /> */}
                        <Stack direction={"column"} spacing={2}>
                            <Box>
                                <Typography variant="h3" align="center" className='title'>
                                    2025 Year In Review
                                </Typography>
                                <Typography>
                                    Happy holidays from our family to yours! As we wrap up another year, we wanted to take a moment to reflect on the highlights and memorable moments that made 2025 special for us.
                                    The biggest news to report on is that Tyler moved to Bloomington to be closer to Cindy. Whiles Indianapolis has its charm, being able to spend more time together has been the best gift of all. Additionally, since we spend most of our free time riding bicycles, it made sense to be closer to some of the best routes in the state. 
                                    The adjustment was really smooth given Bloomington is where we were both born and are familiar with the town. We spent a good part of the year doing some renovations and have turned the house into a home.
                                     Boone has adapted well to the new environment, he loves going for walks around campus. We hope you all are doing well too and look forward to hearing from you soon.
                                </Typography>
                            </Box>
                            <Stack justifyContent="center" spacing={2}>
                                <Typography>Thanks for stopping by and catching up. We hope you enjoy the cards as much as we like making them.</Typography>
                            </Stack>
                            <Stack>
                                <Typography>
                                    Before you go, be sure to check out the {" "}
                                    <Link onClick={() => {
                                        navigate(`/archive`)}}>
                                        archives
                                    </Link>.
                                </Typography>
                            </Stack>
                            <Stack justifyContent="center" spacing={2}>
                                <Typography>Until next year,</Typography>
                                <Typography>Tyler, Cindy, Boone.</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}