'use client'; // Ensures this is a client component

import React from 'react';
import Image from 'next/image';

export default function Contacts() {
  return (
    <div>
      <div>
        <p>Contact me:</p>
        <ul>
          <li>
            <a href="mailto:Edoardo.filippi@uni-mainz.de">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/High-contrast-mail-mark-unread.svg" 
                alt="Email Logo" 
                width={24} 
                height={24} 
                style={{ marginRight: '8px' }} 
              />
              Edoardo.filippi@uni-mainz.de
            </a>
          </li>
          <li>
            <a href="https://github.com/edo98811" target="_blank" rel="noopener noreferrer">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" 
                alt="GitHub Logo" 
                width={24} 
                height={24} 
                style={{ marginRight: '8px' }} 
              />
              GitHub: edo98811
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/edoardo-filippi98/" target="_blank" rel="noopener noreferrer">
              <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
                alt="LinkedIn Logo" 
                width={24} 
                height={24} 
                style={{ marginRight: '8px' }} 
              />
              LinkedIn: Edoardo Filippi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
