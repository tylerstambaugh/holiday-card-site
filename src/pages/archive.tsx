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
    showBack: boolean;
}
export const Archive: React.FC = () => {

    const [showPhotoBack, setShowPhotoBack] = useState<{ showBack: boolean, index: number }[]>([{ showBack: false, index: 1 }]);

    const archiveItems: ArchiveItem[] = [
        {
            photoFrontPath: Front2020,
            photoBackPath: Back2020,
            year: 2020,
            showBack: false
        },
        {
            photoFrontPath: Front2021,
            photoBackPath: Back2021,
            year: 2021,
            showBack: false
        },
        {
            photoFrontPath: Front2022,
            photoBackPath: Back2022,
            year: 2022,
            showBack: false
        },
        {
            photoFrontPath: Front2023,
            photoBackPath: Back2023,
            year: 2023,
            showBack: false
        },
    ]

    return (
        <div>

            {archiveItems.map((item: ArchiveItem, index) => (
                //need to populate the setShowPhotoBack state when creating the items. 
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id={`panel${index}-header`}
                    >
                        {item.year}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box className={"arcive-photo-box"}>
                            {showPhotoBack.find((i) => i.index === index)?.showBack ? (
                                <img src={item.photoBackPath} className="arcive-photo-box" />
                                ) : (
                                    <img src={item.photoFrontPath} className="arcive-photo-box" />
                                )
                            }
                        </Box>
                        <Button onClick={() => {
                            // Create a new state object with the updated showBack value
                            const updatedShowPhotoBack = showPhotoBack.map((item) => {
                                if (item.index + 1 === index) {
                                    return { ...item, showBack: !item.showBack }; // Toggle showBack for the clicked item
                                }
                                return item; // Keep existing values for other items
                            });
                            console.log("updated show back", updatedShowPhotoBack);
                            
                            setShowPhotoBack(updatedShowPhotoBack);
                        }}>
                            {showPhotoBack.find((i) => i.index + 1 === index)?.showBack ? "Show Front" : "Show Back"}
                        </Button>
                    </AccordionDetails>
                </Accordion>
            )
            )}

        </div>
    )

}