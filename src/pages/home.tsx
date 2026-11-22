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
                                    Seasons greetings from the Hoosier state.  As the year draws towards a close, we wanted to share a little about what we've been up to. Cindy and Tyler have been keeping busy with work and cycling while making sure "Ol Man Boone" gets plenty of walks and treats.  Both 
                                    Tyler and Cindy climbed enough hills on our bikes to have reached outer space when all summed up.  We also are excited to share that we've launched a side project we've been working on for quite a while. 
                                    Combining Cindy's Strava prowess and creativity along with Tyler's abilities of turning ideas into realities, we have released <Link onClick={() => {
                                        window.open(`https://www.segmentsniper.com`, `_blank`)
                                    }} target="_blank" rel="noopener noreferrer">
                                        Segment Sniper
                                    </Link> to the public. While a bit niche and specific, we have gotten over 100 registered users but our balance sheet has yet to climb into the black. 
                                    
                                </Typography>                                                                 
                            </Box>
                            <Stack justifyContent="center" spacing={2}>
                                <Typography>We hope you've had a good year and look forward to staying in touch.</Typography>
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
                                <ReactPlayer width="400px" height="400px" controls={true} src='https://youtube.com/shorts/dGDRrUoXi20' />
                                <ReactPlayer width="400px" height="400px" controls={true} src='https://youtube.com/shorts/K2CCf-JiCDU' />
                                <ReactPlayer width="400px" height="400px" controls={true} src='https://www.youtube.com/shorts/X2CYTfTu168' />
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}