import React, { useState } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Container, Typography, useTheme } from "@mui/material"
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
import "../App.css"


type ArchiveItem = {
    photoFrontPath: string;
    photoBackPath: string;
    year: number;
}
export const Archive: React.FC = () => {
    const [showPhotoBack, setShowPhotoBack] = useState<boolean>(false);
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const theme = useTheme();

    const archiveItems: ArchiveItem[] = [
        {
            photoFrontPath: Front2020,
            photoBackPath: Back2020,
            year: 2020,
        },
        {
            photoFrontPath: Front2021,
            photoBackPath: Back2021,
            year: 2021,
        },
        {
            photoFrontPath: Front2022,
            photoBackPath: Back2022,
            year: 2022,
        },
        {
            photoFrontPath: Front2023,
            photoBackPath: Back2023,
            year: 2023,
        },
    ]
    const handleChange =
        (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
            setShowPhotoBack(false)
        };

    return (
        <Container className="container">
            <Typography variant={"h3"} align={"center"} className={"title"}>Holiday Card Archives</Typography>
            {archiveItems.map((item: ArchiveItem, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} className="accordion">
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
                        <Box className={"archive-photo-box"}>
                            <ArchiveImage showBack={showPhotoBack} item={item} />
                            <Button  
                            sx={{backgroundColor: theme.greenbutton.main}}
                            variant="contained" 
                            onClick={() => {
                                setShowPhotoBack(!showPhotoBack)
                            }}>
                                {showPhotoBack ? "Front" : "Back"}
                            </Button>
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
        showBack ?
            <Zoom >
                <Box className={"zoom-box"}>

                <img src={item.photoBackPath} className="archive-photo" />
                </Box>
            </Zoom>
            :
            <Zoom>
                <img src={item.photoFrontPath} className="archive-photo" />
            </Zoom>
    )
}