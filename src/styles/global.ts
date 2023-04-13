import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    :root {

        #root{
            width: 100vw;
            height: 100vh;
            background: linear-gradient(to bottom, rgba(69, 41, 230, 1) 60% , white 40%);
            padding: 0;
        }
        /* --- Colors --- */
        /* Brand */
        --brand-1: #4529e6;
        --brand-2: #5126ea;
        --brand-3: #b0a6f0;
        --brand-4: #edeafd;

        /* Grey */
        --grey-0: #0b0d0d;
        --grey-1: #212529;
        --grey-2: #495057;
        --grey-3: #868e96;
        --grey-4: #adb5bd;
        --grey-5: #ced4da;
        --grey-6: #dee2e6;
        --grey-7: #e9ecef;
        --grey-8: #f1f3f5;
        --grey-9: #f8f9fa;
        --grey-10: #fdfdfd;

        /* White & Black */
        --white: #fff;
        --black: #000;

        /* Feedback */
        --alert-1: #cd2b31;
        --alert-2: #fdd8d8;
        --alert-3: #ffe5e5;
        --success-1: #18794e;
        --success-2: #ccebd7;
        --success-3: #ddf3e4;

        /* Profile */
        --random-1: #e34d8c;
        --random-2: #c04277;
        --random-3: #7d2a4d;
        --random-4: #7000ff;
        --random-5: #6200e3;
        --random-6: #36007d;
        --random-7: #349974;
        --random-8: #2a7d5f;
        --random-9: #153d2e;
        --random-10: #6100ff;
        --random-11: #5700e3;
        --random-12: #30007d;

        /* --- Fonts --- */
        --font: 'Lexend', sans-serif;

        /* --- Font Sizes --- */
        /* Headings */
        --size-h1: 2.75rem;
        --size-h2: 2.25rem;
        --size-h3: 2rem;
        --size-h4: 1.75rem;
        --size-h5: 1.5rem;
        --size-h6: 1.25rem;
        --size-h7: 1rem;

        /* Body */
        --size-body-1: 1rem;
        --size-body-2: 0.875rem;

        /* --- Weight --- */
        --weight-400: 400;
        --weight-500: 500;
        --weight-600: 600;
        --weight-700: 700;
    }

    body {
        font-family: 'Lexend', sans-serif;
    }
`;
