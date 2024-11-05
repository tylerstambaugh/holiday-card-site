import React, { useState } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Link, Modal, Stack, Typography, useTheme } from "@mui/material"
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Front2020 from '../assets/images/holiday-cards/2020_Corona.jpg';
import Back2020 from '../assets/images/holiday-cards/2020_Corona_back.jpg';
import Front2021 from '../assets/images/holiday-cards/2021_Bobeis_And_BooneHound.jpg';
import Back2021 from '../assets/images/holiday-cards/2021_Bobeis_And_BooneHound_back.jpg';
import Front2022 from '../assets/images/holiday-cards/2022_CreationOfBoone.jpg';
import Back2022 from '../assets/images/holiday-cards/2022_CreationOfBoone_back.jpg';
import Front2023 from '../assets/images/holiday-cards/2023_American_Gothic.jpg';
import Back2023 from '../assets/images/holiday-cards/2023_American_Gothic_back.jpg';
import Front2024 from "../assets/images/holiday-cards/2024_Back_Catalogue.jpg";
import Back2024 from "../assets/images/holiday-cards/2024_Back_Catalogue_Back.jpg"
import "../App.css"


type ArchiveItem = {
    photoFrontPath: string;
    photoBackPath: string;
    year: number;
    projectInspiration: string;
    requireWarning: boolean
}
export const Archive: React.FC = () => {
    const [showPhotoBack, setShowPhotoBack] = useState<boolean>(false);
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const theme = useTheme();
    const [contentWarningApproved, setContentWarningApproved] = useState<boolean>(false);
    const [showContentWarning, setShowContentWarning] = useState<boolean>(false);
    const archiveItems: ArchiveItem[] = [
        {
            photoFrontPath: Front2020,
            photoBackPath: Back2020,
            year: 2020,
            projectInspiration: "https://en.wikipedia.org/wiki/COVID-19",
            requireWarning: false
        },
        {
            photoFrontPath: Front2021,
            photoBackPath: Back2021,
            year: 2021,
            projectInspiration: "https://en.wikipedia.org/wiki/Beavis_and_Butt-Head",
            requireWarning: false
        },
        {
            photoFrontPath: Front2022,
            photoBackPath: Back2022,
            year: 2022,
            projectInspiration: "https://en.wikipedia.org/wiki/The_Creation_of_Adam",
            requireWarning: false
        },
        {
            photoFrontPath: Front2023,
            photoBackPath: Back2023,
            year: 2023,
            projectInspiration: "https://en.wikipedia.org/wiki/American_Gothic",
            requireWarning: false
        },
        {
            photoFrontPath: Front2024,
            photoBackPath: Back2024,
            year: 2024,
            projectInspiration: "https://www.frontpagenewsmusic.com/post/the-back-story-behind-that-pink-floyd-back-catalogue-poster",
            requireWarning: true
        },
    ]
    const handleChange = (panel: string, requireWarning: boolean) => {
        if (requireWarning && !contentWarningApproved) {
            setShowContentWarning(true);
        } else {
            setExpanded(prevExpanded => prevExpanded === panel ? false : panel);
        }
        setShowPhotoBack(false);
    };

    return (
        <Container className="container">

            <Typography
                variant={"h3"}
                align={"center"}
                className={"title"}>Holiday Card Archives</Typography>
            {archiveItems.map((item: ArchiveItem, index) => (

                <Accordion
                    key={index}
                    expanded={expanded === `panel${index}`}
                    onChange={() => handleChange(`panel${index}`, item.requireWarning)}
                    className="accordion">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id={`panel${index}-header`}
                        sx={{
                            '&.Mui-expanded': {
                                backgroundColor: '#228B22',
                            },
                            backgroundColor: '#8B0000',
                            color: 'beige'
                        }}
                        className="accordion-summary"
                    >
                        <Typography variant={"h5"} color="8B0000" align="center">

                            {item.year}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={"accordion-details"}>
                        <ContentWarning
                            showContentWarning={showContentWarning}
                            setShowContentWarning={setShowContentWarning}
                            setContentWarningApproved={setContentWarningApproved}
                            panel={`panel${index}`}
                            setExpanded={setExpanded} />
                        <Box className={"archive-photo-box"}>
                            <Link href={item.projectInspiration}>
                            </Link>
                            <ArchiveImage showBack={showPhotoBack} item={item} />
                            <Stack
                                direction={"column"}
                                justifyContent={"space-evenly"}
                                spacing={2}>
                                <Button
                                    sx={{
                                        backgroundColor: theme.greenbutton.main, '&:hover': {
                                            backgroundColor: theme.greenbutton.hover
                                        }
                                    }}
                                    variant="contained"
                                    onClick={() => {
                                        setShowPhotoBack(!showPhotoBack)
                                    }}>
                                    {showPhotoBack ? "Front" : "Show Back"}
                                </Button>
                                <Link href={item.projectInspiration} target="_blank">
                                    <Button sx={{
                                        backgroundColor: theme.greenbutton.main, '&:hover': {
                                            backgroundColor: theme.greenbutton.hover
                                        }
                                    }}
                                        variant="contained">
                                        Project Inspiration
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            )
            )}
        </Container >
    )

}

type ArchiveImageProps = {
    showBack: boolean;
    item: ArchiveItem;
}

const ArchiveImage = ({ showBack, item }: ArchiveImageProps) => {

    return (
        <>
            {showBack ? (
                <Zoom>
                    <img src={item.photoBackPath} className="archive-photo" />
                </Zoom>
            ) : (
                <Zoom>
                    <img src={item.photoFrontPath} className="archive-photo" />
                </Zoom>
            )}
        </>
    )
}

type ContentWarningProps = {
    showContentWarning: boolean;
    setShowContentWarning: (show: boolean) => void;
    setContentWarningApproved: (approved: boolean) => void;
    panel: string;
    setExpanded: (panel: string) => void
}
const ContentWarning = ({ showContentWarning, setShowContentWarning, setContentWarningApproved, panel, setExpanded }: ContentWarningProps) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={showContentWarning}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Content Warning
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Some individuals may find this content offensive. If you are concerned do not proceed.
                </Typography>
                <Stack>
                    <Button
                        onClick={() => {
                            setContentWarningApproved(true);
                            setShowContentWarning(false);
                            setExpanded(panel)
                        }}>
                        Proceed
                    </Button>
                    <Button
                        onClick={() => setShowContentWarning(false)}>
                        Cancel
                    </Button>
                </Stack>
            </Box>
        </Modal>
    )

}