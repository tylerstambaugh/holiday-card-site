import { Card, Link } from '@mui/material';
import React from 'react';

export const Home: React.FC = () => {


    return (
        <Card>

            <h3 className='text-center' >

                2024 Year In Review
            </h3>
            <p>It's been another fantastic year and it flew by quicker than the last. I started a new job in April with
                <Link href={"http://www.redroverk12.com"} target={"_blank"}>
                    Red Rover
                </Link>
                and have settled in nicely.  It is fully remote, so I stay home most days and bang out code on the keyboard and take
                <Link>
                    Ol Man Boone for exercise
                </Link>
                at the park over lunch.
            </p>
            <p>
                There's been a whole lotta bike riding going on, with a couple of mishaps along the way.
                In early April I was hit by a car and got a pretty banged up and then six weeks later got tangled up in a nasty
                <Link>
                    spill at the velodrome.
                </Link>
                They say time heals all wounds and that is proving to be the case. Cindy and I continue to adventure around central Indiana exploring all the sceneries and little towns by bike.
            </p>
            <p>Thanks for stopping by and catching up. We hope you enjoy the cards as much as we like coming up with them and creating them.  </p>
            <p>Until next year, Tyler, Cindy, Boone</p>

        </Card>
    )

}