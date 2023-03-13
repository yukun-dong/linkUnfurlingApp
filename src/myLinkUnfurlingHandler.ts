import { TurnContext, Activity, CardFactory, MessagingExtensionResponse } from "botbuilder";
import { Link, TeamsFxLinkUnfurlingHandler, TeamsFxZeroInstallLinkUnfurlingHandler, TriggerLinks } from "./sdk/messageExtension";

export class MainLinkUnfurlingHandler implements TeamsFxLinkUnfurlingHandler {
  triggerLinks: TriggerLinks = ".*\.test234\.com/main/.*";
  async handleLinkReceived(context: TurnContext, link: Link): Promise<any> {
    console.log(`app received link ${link.link}`);
    const attachment = CardFactory.thumbnailCard("card rendered for main", link.link, ['https://bot-framework.azureedge.net/static/341749-d71b264801/intercom-webui/v1.6.2/assets/landing-page/images/Composer_Icon.png']);
    return {
      composeExtension: {
        type: "result",
        attachmentLayout: "list",
        attachments: [attachment],
      },
    };
  }
}

export class ZeroLinkUnfurlingHandler implements TeamsFxZeroInstallLinkUnfurlingHandler {
  triggerLinks: TriggerLinks = ".*\.test234\.com/main/.*";
  async handleLinkReceived(context: TurnContext, link: Link): Promise<any> {
    console.log(`app received link ${link.link}`);
    const attachment = CardFactory.thumbnailCard("card rendered for zero install", link.link, ['https://bot-framework.azureedge.net/static/341749-d71b264801/intercom-webui/v1.6.2/assets/landing-page/images/Composer_Icon.png']);
    return {
      composeExtension: {
        type: "auth",
        attachmentLayout: "list",
        attachments: [attachment],
      },
    };
  }
}

export class DevLinkUnfurlingHandler implements TeamsFxLinkUnfurlingHandler {
  triggerLinks: TriggerLinks = ".*\.test234\.com/dev/.*";
  async handleLinkReceived(context: TurnContext, link: Link): Promise<any> {
    console.log(`app received link ${link.link}`);
    const attachment = CardFactory.thumbnailCard("card rendered for dev", link.link, ['https://bot-framework.azureedge.net/static/341749-d71b264801/intercom-webui/v1.6.2/assets/landing-page/images/Composer_Icon.png']);
    return {
      composeExtension: {
        type: "result",
        attachmentLayout: "list",
        attachments: [attachment],
      },
    };
  }

}