import { Command } from "./commandInterfaces";
// open browser and go to the site////////////
const openBrowser = (c: Command) => {
  return new Promise<void>((done) => {
    c.browser.windowMaximize();
    c.browser.url(c.data[1], (res) => {
      c.report({
        command: "Open Browser",
        cellData: c.data,
        statusData: res.status === 0,
        reportName: c.reportName,
        browserName: c.browserName,
      });
      c.browser.pause(300, () => {
        done();
      });
    });
  });
};
////////////////////////////////////////////////
export { openBrowser };
