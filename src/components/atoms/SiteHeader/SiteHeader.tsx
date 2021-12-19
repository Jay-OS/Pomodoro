import React from 'react';
import { css } from 'aphrodite/no-important';

import siteHeaderStyles from './SiteHeaderStyles';

const SiteHeader = () => (
    <div className={css(siteHeaderStyles.siteHeader)}>
        <svg
            className={css(siteHeaderStyles.siteHeaderColumn)}
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 432.01 41.12"
        >
            <path
                fill="#d63238"
                d="m59.15 13.15-3.71 1.71 3.81 5.51c.2.3.34.57.43.83.18.55.07.96-.06 1.21-.24.45-.7.71-1.24.71-.35 0-.75-.1-1.2-.32l-8.47-4.07-7.86 4.01c-.47.24-.87.35-1.23.35-.54 0-1-.26-1.25-.69-.13-.24-.25-.64-.11-1.18.08-.27.2-.55.39-.86l3.41-5.54-2.89-1.56c-4.52 2.77-7.48 7.35-7.48 12.53 0 8.46 7.86 15.33 17.54 15.33 9.69 0 17.54-6.87 17.54-15.33 0-5.24-3.02-9.88-7.62-12.64zm-6.4-3.09-2.33-3.32c-.33-.47-.77-.7-1.2-.7-.43 0-.86.22-1.19.67l-2.47 3.33-6.08.77c-1.12.14-1.22.69-.24 1.23l1.07.57 3.3 1.8-4.01 6.53c-.41.67-.38 1.05.02 1.05.17 0 .42-.08.72-.24l8.36-4.26 8.95 4.31c.31.15.56.22.73.22.39 0 .4-.37-.05-1.02l-4.55-6.59 4.16-1.92 1.24-.57c1.03-.47.95-.97-.17-1.1l-6.26-.76zm-37.33 14.2H8.05V35.5c0 1.61-.38 2.83-1.14 3.66-.76.83-1.72 1.25-2.87 1.25-1.21 0-2.19-.41-2.93-1.23C.37 38.35 0 37.14 0 35.56V4.93C0 3.16.41 1.9 1.22 1.14 2.04.38 3.32 0 5.1 0h10.32c3.05 0 5.4.23 7.05.7 1.63.46 3.03 1.21 4.22 2.25 1.18 1.06 2.08 2.33 2.69 3.85.62 1.52.92 3.23.92 5.12 0 4.06-1.24 7.12-3.73 9.21-2.5 2.08-6.21 3.13-11.15 3.13zM13.47 6.05H8.05v12.16h5.42c1.9 0 3.49-.21 4.76-.61 1.27-.39 2.24-1.04 2.92-1.95.66-.9 1-2.09 1-3.55 0-1.76-.52-3.18-1.55-4.28-1.16-1.18-3.53-1.77-7.13-1.77zm83.08 20.57v9.83c0 1.56-.35 2.72-1.06 3.5-.7.78-1.63 1.17-2.78 1.17-1.12 0-2.03-.39-2.72-1.17-.7-.78-1.05-1.94-1.05-3.5V24.67c0-1.87-.06-3.31-.19-4.34-.12-1.03-.46-1.88-1.03-2.54-.56-.65-1.44-.99-2.66-.99-2.43 0-4.02.84-4.78 2.5-.77 1.66-1.16 4.04-1.16 7.15v10c0 1.54-.35 2.7-1.05 3.49-.69.79-1.61 1.18-2.73 1.18-1.12 0-2.04-.39-2.75-1.18-.71-.79-1.08-1.95-1.08-3.49V15.29c0-1.39.33-2.45.97-3.18.64-.72 1.48-1.08 2.52-1.08 1.02 0 1.86.34 2.54 1.02.67.67 1.01 1.61 1.01 2.8v.71c1.28-1.54 2.66-2.67 4.12-3.39 1.46-.72 3.09-1.08 4.88-1.08 1.86 0 3.46.37 4.8 1.11 1.34.74 2.44 1.86 3.3 3.36 1.25-1.52 2.59-2.64 4.01-3.37 1.43-.73 3.01-1.1 4.75-1.1 2.03 0 3.77.4 5.23 1.19 1.46.8 2.56 1.93 3.28 3.41.63 1.34.94 3.45.94 6.31v14.45c0 1.56-.35 2.72-1.05 3.5-.7.78-1.64 1.17-2.78 1.17-1.12 0-2.04-.39-2.75-1.18-.71-.79-1.08-1.95-1.08-3.49V24.01c0-1.59-.06-2.86-.2-3.82-.14-.95-.5-1.76-1.1-2.41-.59-.65-1.5-.98-2.71-.98-.98 0-1.91.29-2.78.87-.87.58-1.56 1.35-2.05 2.34-.54 1.23-.81 3.45-.81 6.61zm52.22-.54c0 2.21-.35 4.24-1.03 6.1-.69 1.86-1.68 3.46-2.99 4.79-1.29 1.34-2.86 2.36-4.66 3.07-1.8.71-3.84 1.08-6.1 1.08-2.24 0-4.26-.37-6.05-1.09-1.78-.72-3.34-1.75-4.65-3.11-1.3-1.34-2.3-2.93-2.98-4.76-.67-1.84-1.02-3.87-1.02-6.09 0-2.23.35-4.29 1.03-6.15.7-1.86 1.68-3.45 2.96-4.77 1.29-1.31 2.84-2.33 4.66-3.04 1.83-.72 3.84-1.08 6.05-1.08 2.24 0 4.28.36 6.1 1.08 1.82.73 3.39 1.76 4.69 3.1 1.3 1.34 2.29 2.93 2.97 4.78.67 1.84 1.02 3.87 1.02 6.09zm-7.44 0c0-3.01-.67-5.35-1.99-7.04-1.33-1.67-3.11-2.51-5.35-2.51-1.45 0-2.72.37-3.82 1.12-1.1.75-1.95 1.86-2.54 3.32-.6 1.46-.9 3.17-.9 5.11 0 1.94.3 3.63.88 5.07.59 1.45 1.43 2.56 2.52 3.32 1.09.77 2.38 1.15 3.86 1.15 2.24 0 4.02-.84 5.35-2.53 1.32-1.69 1.99-4.03 1.99-7.01zm33.52 10.81v-.73c-.99 1.13-1.97 2.06-2.94 2.77-.96.71-2.01 1.26-3.14 1.63-1.13.37-2.36.56-3.7.56-1.77 0-3.41-.38-4.92-1.13-1.5-.75-2.82-1.82-3.92-3.21s-1.93-3.03-2.5-4.91c-.57-1.87-.86-3.91-.86-6.09 0-4.63 1.13-8.24 3.39-10.82 2.26-2.58 5.24-3.87 8.92-3.87 2.13 0 3.93.37 5.39 1.1 1.46.73 2.9 1.86 4.28 3.38V4.65c0-1.52.31-2.67.91-3.44.61-.78 1.47-1.17 2.59-1.17 1.12 0 1.98.36 2.59 1.08.6.71.91 1.76.91 3.15v32.62c0 1.4-.33 2.47-.97 3.17-.66.7-1.5 1.06-2.53 1.06-1.01 0-1.85-.37-2.51-1.11-.65-.73-.99-1.77-.99-3.12zm-14.54-10.86c0 2 .32 3.71.94 5.12.62 1.41 1.47 2.46 2.56 3.18 1.08.71 2.27 1.07 3.54 1.07 1.31 0 2.49-.34 3.56-1.02 1.08-.67 1.94-1.71 2.57-3.11.64-1.4.97-3.14.97-5.24 0-1.96-.33-3.66-.97-5.07-.63-1.43-1.5-2.51-2.59-3.26-1.1-.75-2.29-1.12-3.59-1.12-1.35 0-2.57.38-3.63 1.15-1.06.77-1.89 1.87-2.48 3.3-.58 1.44-.88 3.11-.88 5zm56.67.05c0 2.21-.34 4.24-1.03 6.1-.69 1.86-1.68 3.46-2.98 4.79-1.3 1.34-2.86 2.36-4.67 3.07-1.8.71-3.83 1.08-6.09 1.08-2.25 0-4.27-.37-6.05-1.09-1.79-.72-3.34-1.75-4.65-3.11a13.25 13.25 0 0 1-2.98-4.76c-.68-1.84-1.02-3.87-1.02-6.09 0-2.23.34-4.29 1.03-6.15.69-1.86 1.67-3.45 2.96-4.77 1.28-1.31 2.84-2.33 4.66-3.04 1.82-.72 3.84-1.08 6.05-1.08 2.24 0 4.27.36 6.09 1.08 1.83.73 3.39 1.76 4.69 3.1 1.31 1.34 2.3 2.93 2.97 4.78.68 1.84 1.02 3.87 1.02 6.09zm-7.44 0c0-3.01-.66-5.35-1.99-7.04-1.33-1.67-3.1-2.51-5.34-2.51-1.45 0-2.72.37-3.82 1.12-1.1.75-1.95 1.86-2.55 3.32-.6 1.46-.89 3.17-.89 5.11 0 1.94.29 3.63.88 5.07.59 1.45 1.42 2.56 2.51 3.32 1.09.77 2.39 1.15 3.87 1.15 2.24 0 4.01-.84 5.34-2.53s1.99-4.03 1.99-7.01zm20.6 4.36v6.18c0 1.5-.36 2.62-1.06 3.37-.7.75-1.59 1.13-2.67 1.13-1.07 0-1.94-.38-2.63-1.14-.68-.76-1.03-1.88-1.03-3.36v-20.6c0-3.32 1.21-4.99 3.6-4.99 1.22 0 2.11.39 2.65 1.17.54.77.84 1.93.9 3.45.87-1.52 1.78-2.68 2.72-3.45.93-.78 2.17-1.17 3.72-1.17 1.56 0 3.06.39 4.53 1.17 1.46.77 2.19 1.81 2.19 3.1 0 .9-.31 1.64-.94 2.24-.62.59-1.29.87-2.01.87-.27 0-.93-.16-1.96-.5-1.05-.33-1.96-.5-2.76-.5-1.08 0-1.96.29-2.65.86-.69.57-1.23 1.41-1.6 2.53-.38 1.12-.64 2.45-.79 4-.14 1.54-.21 3.42-.21 5.64zm42.56-4.36c0 2.21-.34 4.24-1.03 6.1-.69 1.86-1.68 3.46-2.99 4.79-1.29 1.34-2.86 2.36-4.66 3.07-1.8.71-3.84 1.08-6.1 1.08-2.24 0-4.26-.37-6.05-1.09a13.39 13.39 0 0 1-4.65-3.11c-1.3-1.34-2.3-2.93-2.98-4.76-.67-1.84-1.01-3.87-1.01-6.09 0-2.23.34-4.29 1.02-6.15.7-1.86 1.68-3.45 2.96-4.77 1.29-1.31 2.84-2.33 4.66-3.04 1.83-.72 3.84-1.08 6.05-1.08 2.24 0 4.28.36 6.1 1.08 1.82.73 3.39 1.76 4.69 3.1 1.31 1.34 2.29 2.93 2.97 4.78.68 1.84 1.02 3.87 1.02 6.09zm-7.44 0c0-3.01-.67-5.35-1.99-7.04-1.33-1.67-3.11-2.51-5.35-2.51-1.45 0-2.72.37-3.82 1.12-1.1.75-1.95 1.86-2.54 3.32-.6 1.46-.9 3.17-.9 5.11 0 1.94.3 3.63.88 5.07.59 1.45 1.43 2.56 2.52 3.32 1.09.77 2.38 1.15 3.86 1.15 2.24 0 4.02-.84 5.35-2.53 1.32-1.69 1.99-4.03 1.99-7.01z"
            />
            <path
                fill="#706962"
                fillRule="nonzero"
                d="M306.99 7.37h-8.78v28.84c0 1.67-.37 2.9-1.12 3.7-.74.81-1.7 1.21-2.87 1.21-1.2 0-2.18-.41-2.93-1.23-.75-.81-1.12-2.03-1.12-3.68V7.37h-8.78c-1.38 0-2.4-.31-3.07-.91-.66-.61-1-1.41-1-2.41 0-1.03.35-1.84 1.04-2.44.7-.61 1.7-.9 3.03-.9h25.6c1.4 0 2.43.3 3.11.92.68.62 1.02 1.43 1.02 2.42 0 1-.35 1.8-1.04 2.41-.68.6-1.71.91-3.09.91zm15.03 7.86v21.39c0 1.48-.36 2.6-1.06 3.36-.7.76-1.59 1.14-2.67 1.14-1.08 0-1.96-.39-2.64-1.17-.67-.78-1.02-1.89-1.02-3.33V15.45c0-1.47.35-2.57 1.02-3.31.68-.74 1.56-1.11 2.64-1.11s1.97.37 2.67 1.11c.7.74 1.06 1.78 1.06 3.09zm-3.66-7.64c-1.03 0-1.9-.31-2.64-.94-.73-.63-1.09-1.53-1.09-2.69 0-1.03.37-1.89 1.12-2.57.75-.67 1.62-1.01 2.61-1.01.96 0 1.81.3 2.55.91.74.62 1.11 1.51 1.11 2.67 0 1.14-.37 2.03-1.09 2.67-.72.64-1.57.96-2.57.96zm35.9 19.03v9.83c0 1.56-.35 2.72-1.05 3.5-.7.78-1.64 1.17-2.79 1.17-1.12 0-2.02-.39-2.72-1.17-.69-.78-1.04-1.94-1.04-3.5V24.67c0-1.87-.07-3.31-.2-4.34-.12-1.03-.46-1.88-1.02-2.54-.57-.65-1.44-.99-2.67-.99-2.42 0-4.01.84-4.78 2.5-.77 1.66-1.15 4.04-1.15 7.15v10c0 1.54-.36 2.7-1.05 3.49-.69.79-1.61 1.18-2.74 1.18-1.12 0-2.03-.39-2.75-1.18-.71-.79-1.07-1.95-1.07-3.49V15.29c0-1.39.32-2.45.96-3.18.64-.72 1.48-1.08 2.53-1.08 1.02 0 1.86.34 2.53 1.02.68.67 1.02 1.61 1.02 2.8v.71c1.28-1.54 2.66-2.67 4.12-3.39 1.46-.72 3.09-1.08 4.87-1.08 1.87 0 3.46.37 4.8 1.11 1.34.74 2.45 1.86 3.31 3.36 1.24-1.52 2.59-2.64 4.01-3.37 1.43-.73 3.01-1.1 4.75-1.1 2.02 0 3.76.4 5.22 1.19 1.46.8 2.57 1.93 3.29 3.41.63 1.34.94 3.45.94 6.31v14.45c0 1.56-.35 2.72-1.05 3.5-.71.78-1.64 1.17-2.79 1.17-1.12 0-2.03-.39-2.75-1.18-.71-.79-1.07-1.95-1.07-3.49V24.01c0-1.59-.06-2.86-.2-3.82-.14-.95-.5-1.76-1.1-2.41-.6-.65-1.5-.98-2.71-.98-.98 0-1.91.29-2.79.87-.87.58-1.55 1.35-2.04 2.34-.55 1.23-.82 3.45-.82 6.61zm45.16 1.29h-14.47c.02 1.68.36 3.16 1.02 4.44.65 1.29 1.53 2.25 2.62 2.9 1.09.66 2.31.98 3.62.98.89 0 1.69-.1 2.42-.31.74-.21 1.45-.53 2.13-.98.69-.44 1.32-.91 1.9-1.42.58-.51 1.33-1.19 2.25-2.06.38-.33.92-.49 1.62-.49.76 0 1.38.21 1.85.63.47.4.71 1 .71 1.75 0 .67-.27 1.45-.79 2.34-.53.89-1.31 1.75-2.38 2.57-1.05.82-2.38 1.5-3.98 2.04-1.6.55-3.44.82-5.51.82-4.75 0-8.44-1.36-11.08-4.08-2.64-2.71-3.95-6.38-3.95-11.02 0-2.18.32-4.22.97-6.09.65-1.87 1.6-3.47 2.84-4.81 1.25-1.33 2.78-2.36 4.61-3.07 1.82-.71 3.85-1.07 6.07-1.07 2.89 0 5.37.61 7.43 1.83 2.08 1.22 3.62 2.79 4.66 4.73 1.02 1.94 1.54 3.91 1.54 5.92 0 1.85-.54 3.07-1.6 3.62-1.06.55-2.56.83-4.5.83zm-14.47-4.22h13.41c-.17-2.53-.86-4.42-2.04-5.67-1.19-1.25-2.74-1.88-4.67-1.88-1.86 0-3.36.64-4.55 1.9-1.18 1.28-1.9 3.16-2.15 5.65zm34.14 6.75v6.18c0 1.5-.35 2.62-1.05 3.37-.71.75-1.59 1.13-2.68 1.13-1.06 0-1.94-.38-2.62-1.14-.69-.76-1.03-1.88-1.03-3.36v-20.6c0-3.32 1.2-4.99 3.6-4.99 1.22 0 2.11.39 2.64 1.17.55.77.85 1.93.9 3.45.88-1.52 1.79-2.68 2.72-3.45.93-.78 2.17-1.17 3.73-1.17 1.55 0 3.06.39 4.52 1.17 1.46.77 2.19 1.81 2.19 3.1 0 .9-.3 1.64-.93 2.24-.62.59-1.29.87-2.02.87-.26 0-.92-.16-1.96-.5-1.04-.33-1.96-.5-2.75-.5-1.09 0-1.97.29-2.66.86-.68.57-1.22 1.41-1.6 2.53-.38 1.12-.64 2.45-.79 4-.13 1.54-.21 3.42-.21 5.64z"
            />
        </svg>
        <span
            className={css(
                siteHeaderStyles.siteHeaderColumn,
                siteHeaderStyles.credit
            )}
        >
            by Jay Oldham-Smith
        </span>
    </div>
);

export default SiteHeader;
