describe('Weather App', () => {
    it('should show weather for Moscow', async () => {
        await browser.url('http://localhost:3000');

        const inputField = await browser.$('#query');

        await inputField.setValue('Moscow');

        const submitButton = await browser.$('button[type="submit"]');

        await submitButton.click();

        await browser.pause(2000);

        const cityName = await browser.$('h5');

        const cityNameText = await cityName.getText();

        expect(cityNameText).toContain('Moscow');
    });
});
