import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStrava,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container, Stack } from '@mui/material';
import '../App.css'

export const Footer: React.FC = () => {
  return (
    <footer
      className={`footer justify-content-center align-items-center`}
    >
      <Container className="d-flex justify-content-center">
        <Stack
          className="d-flex justify-content-around"
          style={{
            width: '100%',
            
          }}
          direction="row"
          spacing={2}
        >
            <a
              href="https://github.com/tylerstambaugh"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} color="#333" size="2x" />
            </a>
            <a
              href="https://www.strava.com/athletes/381648"
              target="_blank"
            >
              <FontAwesomeIcon icon={faStrava} color="#fc4c02" size="2x" />
            </a>
            <a
              href="https://www.instagram.com/tyler_stambaugh/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} color="#c13584" size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/tyler-stambaugh-b274a59/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#0a66c2"  size="2x"/>
            </a>
            <a href="mailto:tyler.stambaugh@icloud.com" target="_blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
              />
            </a>
            </Stack>
          <Stack className="text-center">
            <p>Copyright 2024 Tyler Stambaugh</p>
        </Stack>
      </Container>
    </footer>
  );
};
