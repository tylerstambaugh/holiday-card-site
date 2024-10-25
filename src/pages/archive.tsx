import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import React from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type ArchiveItem = {
    photoFrontPath: string;
    photoBackPath: string;
    year: number;
}
export const Archive: React.FC = () => {

    const archiveItems: ArchiveItem[] = [
        {
            photoFrontPath: "asdf",
            photoBackPath: "asdf",
            year: 2020
        },
        {
            photoFrontPath: "asdf",
            photoBackPath: "asdf",
            year: 2020
        },
        {
            photoFrontPath: "asdf",
            photoBackPath: "asdf",
            year: 2020
        },
        {
            photoFrontPath: "asdf",
            photoBackPath: "asdf",
            year: 2020
        },
        {
            photoFrontPath: "asdf",
            photoBackPath: "asdf",
            year: 2020
        },
    ]

    return (
        <div>

            {archiveItems.map((item: ArchiveItem, index) => (

            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id={`panel${index}-header`}
                >
                   {item.year}
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            )
            )}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Accordion 1
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Accordion 2
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

        </div>
    )

}