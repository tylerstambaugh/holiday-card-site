import { Box, Container, Grid2 as Grid, Link, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import '../App.css'
import { useLocation, useNavigate } from 'react-router-dom';
import ReactGA4 from 'react-ga4';
import ReactPlayer from 'react-player'

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
                                    Happy holidays from our family to yours! As we wrap up another year, we wanted to share little bit about what we've been up to.
                                    The biggest news to report on is that Tyler moved to Bloomington to be closer to Cindy. While Indianapolis was fine for the last 20 years, with his new job being fully remote there was nothing keeping him there. 
                                    Being able to spend more time together has been the best gift of all. 
                                    Additionally, since we spend most of our free time riding bicycles, it made sense to be closer to some of the best routes in the state. 
                                    The adjustment was really smooth given Bloomington is where we were both born and that we are familiar with the town. We spent a good part of the year doing some renovations and have turned the house into a home. We've been enjoying exploring the myriad of restaurants in town,
                                    and and seeing Cindy's father play guitar at Trailhead Pizza where you can order whatever you want and you'll likely be surprised with what you get.
                                    Ol Boone has adapted well to the new environment, we frequently take him for walks around the Indiana University campus and he's made some friends at the walk-up ice cream stand where they love serving him pup cups.
                                    We hope you all are doing well too and look forward to hearing from you soon.
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
                            <Stack>
                                
                                <Typography variant="h6" align="center" className='title'>
                                   A couple of quick videos from our year:
                                </Typography>
                                <Stack spacing={2} justifyContent="center" alignItems="center" padding={1}>
                                <ReactPlayer width="400px" height="400px" controls={true} src='https://youtube.com/shorts/MbzsFOroJiI?si=hOMaEB3rcuw4Oeki' />
                                <ReactPlayer width="400px" height="400px" controls={true} src='https://youtube.com/shorts/ia1G9tmhZb4?si=2JzX8BfTxhkL7YjK' />
                                <ReactPlayer width="400px" height="400px" controls={true} src='https://youtube.com/shorts/Qw_bTXKwCoE?si=irvfk8KYYBBaf0rf' />
                                <ReactPlayer width="400px" height="400px" controls={true} src='https://youtube.com/shorts/hf4qnYNtwb0?si=YzG-tLoJ2yiv6VTn' />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}