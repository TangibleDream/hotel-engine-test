const BtnSearchAll = async () => {return $("a[data-target-type='Search']")}
const LblAboutGitHub = async () => {return $("h1[class='h1-mktg mb-3']")};
const LnkAboutGitHub = async () => {return $("a[data-ga-click*='go to about']")};
const LnkFirstResult = async () => {return $$("ul a[class='v-align-middle']")[0];}
const TxtRepoSearch = async () => {return $('input[placeholder="Search GitHub"]');}
export default { BtnSearchAll, LblAboutGitHub, LnkAboutGitHub, LnkFirstResult, TxtRepoSearch } 