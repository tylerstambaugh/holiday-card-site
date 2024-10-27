import { Accordion, AccordionDetails, AccordionSummary, Box, Button } from "@mui/material"
import React, { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Front2020 from '../assets/images/holiday-cards/2020_Corona.jpg';
import Back2020 from '../assets/images/holiday-cards/2020_Corona_back.jpg';
import Front2021 from '../assets/images/holiday-cards/2021_Bobeis_And_BooneHound.jpg';
import Back2021 from '../assets/images/holiday-cards/2021_Bobeis_And_BooneHound_back.jpg';
import Front2022 from '../assets/images/holiday-cards/2022_CreationOfBoone.jpg';
import Back2022 from '../assets/images/holiday-cards/2022_CreationOfBoone_back.jpg';
import Front2023 from '../assets/images/holiday-cards/2023_American_Gothic.jpg';
import Back2023 from '../assets/images/holiday-cards/2023_American_Gothic_back.jpg';


type ArchiveItem = {
    photoFrontPath: string;
    photoBackPath: string;
    year: number;
}
export const Archive: React.FC = () => {

    //const [showPhotoBack, setShowPhotoBack] = useState<{ showBack: boolean, index: number }[]>([{ showBack: false, index: 1 }]);
    const [showPhotoBack, setShowPhotoBack] = useState<boolean>(false);
    const [expanded, setExpanded] = React.useState<string | false>(false);

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
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
            setShowPhotoBack(false)
        };

    return (
        <div>

            {archiveItems.map((item: ArchiveItem, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id={`panel${index}-header`}
                        className="archive-accordion-header-selected"
                    >
                        {item.year}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box className={"archive-photo-box"}>
                            <ArchiveImage showBack={showPhotoBack} item={item} />
                        </Box>
                        <Button variant="contained" onClick={() => {
                            setShowPhotoBack(!showPhotoBack)
                        }}>
                            {showPhotoBack ? "Show Front" : "Show Back"}
                        </Button>
                    </AccordionDetails>
                </Accordion>
            )
            )}

        </div>
    )

}

type ArchiveImageProps = {
    showBack: boolean;
    item: ArchiveItem;
}

const ArchiveImage = ({ showBack, item }: ArchiveImageProps) => {

    return (

        showBack ? <img src={item.photoBackPath} className="archive-photo" /> :
            <img src={item.photoFrontPath} className="archive-photo" />
    )
}