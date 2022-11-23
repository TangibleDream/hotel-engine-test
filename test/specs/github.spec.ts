import { fill } from './helpers';
import github from '../pages/github.pages';
describe('the github website', async () => {
    before(async () => {
        await browser.url('/');
    })
    it('should have facebook/create-react-app appear as the first result from a search on github', async () => {       
        await fill(await github.TxtRepoSearch(), 'create-react-app');
        await (await github.BtnSearchAll()).click();
        expect(await (await github.LnkFirstResult()).getText()).toEqual('facebook/create-react-app');
    });
    it('should have an about page', async () => {
        await (await github.LnkAboutGitHub()).click();
        await expect(github.LblAboutGitHub()).toExist();
        expect(await (await github.LblAboutGitHub()).getText()).toEqual("Let's build from here")
        expect(await browser.getUrl()).toEqual('https://github.com/about');
    });
});