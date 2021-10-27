// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        baseURL: 'http://www.uitestingplayground.com',
    },
    //globalSetup: require.resolve('./global-setup')
};

module.exports = config;