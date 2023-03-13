import config from "./config";
import { MessageExtension } from "../sdk/messageExtension";
import { DevLinkUnfurlingHandler, MainLinkUnfurlingHandler, ZeroLinkUnfurlingHandler } from "../myLinkUnfurlingHandler";


export const linkUnfurlingApp = new MessageExtension({
  adapterConfig: {
    MicrosoftAppId: config.botId,
    MicrosoftAppPassword: config.botPassword,
    MicrosoftAppType: "MultiTenant",
  },
  linkUnfurling: {
    enabled: true,
    links: [new MainLinkUnfurlingHandler(), new DevLinkUnfurlingHandler()],
    zeroInstallLinks:[new ZeroLinkUnfurlingHandler()]
  }
})
