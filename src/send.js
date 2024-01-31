import "dotenv/config";
import { Webhook, MessageBuilder } from "discord-webhook-node";

const hook = new Webhook(process.env.WEBHOOK_URL);

async function sendMessage() {
  const embed = new MessageBuilder()
    .setTitle("❤️ 오늘 하루도 화이팅 ❤️")
    .setColor("#00ff00")

  hook.send(embed);
}

sendMessage();
