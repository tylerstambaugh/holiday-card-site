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
                                    2024 Year In Review
                                </Typography>
                                <Typography>
                                    It's been another fantastic year and it flew by quicker than the last. I started a new job in April with{' '}
                                    <Link href={"http://www.redroverk12.com"} target={"_blank"}>
                                        Red Rover
                                    </Link>{' '}
                                    and have settled in nicely. It is fully remote, so I get to stay home and develope software solutions. Usually I'll take{' '}
                                    <Link href={"https://youtube.com/shorts/TyLCEsu_g54?feature=share"} target={"_blank"}>
                                        Ol Man Boone for exercise
                                    </Link>{' '}
                                    at the park over lunch.
                                </Typography>
                                <Typography>
                                    There's been a whole lotta bike riding going on, with a couple of mishaps along the way. In early April I was hit by a car and got pretty banged up and then six weeks later got tangled up in a nasty{' '}
                                    <Link href="https://youtu.be/QQHHL25VDOU" target={"_blank"}>
                                        spill at the velodrome.
                                    </Link>{' '}
                                    They say time heals all wounds and that is proving to be the case. Cindy and I continue to{' '}
                                    <Link href={"https://youtube.com/shorts/6ME0bnRGTDc?feature=share"} target={"_blank"}>
                                        adventure around
                                    </Link>{' '}
                                    central Indiana exploring all the sceneries and little towns by bike.
                                </Typography>
                            </Box>
                            <Stack justifyContent="center" spacing={2}>
                                <Typography>Thanks for stopping by and catching up. We hope you enjoy the cards as much as we like coming up with them and creating them.</Typography>
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