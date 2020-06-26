//theme color definitions
const black = '#161617';
const white = '#FFFFFF';
const grey = '#F8F8F9';

const lightTheme = {
    background: grey,
    body: black
}
const darkTheme = {
    background: black,
    body: white

}

const theme = mode => (mode === darkTheme ? darkTheme : lightTheme);

export default theme;